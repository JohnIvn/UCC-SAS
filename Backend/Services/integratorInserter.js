import dotenv from "dotenv";
import { integratorAddStudentAccount } from "../Controllers/integratorController.js";
import studentSubjects from "../Models/studentAccountSubjects.js"; 

dotenv.config();

export async function integratorInserter() {
  try {
    const response = await fetch(process.env.INTEGRATOR_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentNumber: "AUTO_FETCH" }),
    });

    console.log("Raw response status:", response.status);
    console.log("Raw response headers:", [...response.headers]);

    const text = await response.text();
    console.log("Raw response body:", text);

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error(`Unexpected response: ${text}`);
    }

    const data = JSON.parse(text);
    console.log("Startup function executed:", data);

    if (data && Array.isArray(data)) {
      for (const student of data) {
        const studentResponse = await integratorAddStudentAccount(
          { body: student },
          {
            status: (code) => ({
              json: (msg) => console.log(`Response ${code}:`, msg),
            }),
          }
        );

        const { userId, studentNumber, section } = student;

        if (userId && studentNumber && section) {
          const existingStudent = await studentSubjects.findOne({ where: { studentNumber } });

          if (!existingStudent) {
            await studentSubjects.create({
              userId,
              studentNumber,
              section,
            });

            console.log(
              `Inserted into studentSubjects: userId=${userId}, studentNumber=${studentNumber}, section=${section}`
            );
          } else {
            console.warn(`Student with studentNumber=${studentNumber} already exists. Skipping insertion.`);
          }
        } else {
          console.warn("Missing required fields for studentSubjects:", student);
        }
      }
    }
  } catch (error) {
    console.error("Error in automatic execution:", error);
  }
}

export default integratorInserter;
