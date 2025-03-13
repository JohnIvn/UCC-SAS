import { aimsStudentAccounts } from "../Models/aimsStudentInfoModel.js";

export const insertStudentsInfo = async () => {
  try {
    const existingSubject = await aimsStudentAccounts.findAll();

    if (existingSubject.length === 0) {
      const Subject = [
        {
          studentNumber: 20231001,
          name: "Jan Ivan V. Montenegro",
          course: "BSIT",
          year: "2",
          role: "Student",
          section: "B",
          email: "20231001@gmail.com",
          phoneNumber: "09123456781",
          password: "Montenegro",
        },
        {
          studentNumber: 20231002,
          name: "Maria L. Santos",
          course: "BSCS",
          year: "1",
          role: "Student",
          section: "A",
          email: "20231002@gmail.com",
          phoneNumber: "09123456782",
          password: "Santos",
        },
        {
          studentNumber: 20231003,
          name: "Carlos D. Reyes",
          course: "BSIT",
          year: "3",
          role: "Student",
          section: "C",
          email: "20231003@gmail.com",
          phoneNumber: "09123456783",
          password: "Reyes",
        },
        {
          studentNumber: 20231004,
          name: "Andrea F. Cruz",
          course: "BSCS",
          year: "2",
          role: "Student",
          section: "B",
          email: "20231004@gmail.com",
          phoneNumber: "09123456784",
          password: "Cruz",
        },
        {
          studentNumber: 20231005,
          name: "Luis J. Garcia",
          course: "BSIT",
          year: "4",
          role: "Student",
          section: "D",
          email: "20231005@gmail.com",
          phoneNumber: "09123456785",
          password: "Garcia",
        },
        {
          studentNumber: 20231006,
          name: "Patricia M. Rivera",
          course: "BSCS",
          year: "3",
          role: "Student",
          section: "A",
          email: "20231006@gmail.com",
          phoneNumber: "09123456786",
          password: "Rivera",
        },
        {
          studentNumber: 20231007,
          name: "Mark E. Mendoza",
          course: "BSIT",
          year: "1",
          role: "Student",
          section: "B",
          email: "20231007@gmail.com",
          phoneNumber: "09123456787",
          password: "Mendoza",
        },
        {
          studentNumber: 20231008,
          name: "Samantha T. Diaz",
          course: "BSCS",
          year: "4",
          role: "Student",
          section: "C",
          email: "20231008@gmail.com",
          phoneNumber: "09123456788",
          password: "Diaz",
        },
        {
          studentNumber: 20231009,
          name: "John R. Torres",
          course: "BSIT",
          year: "2",
          role: "Student",
          section: "D",
          email: "20231009@gmail.com",
          phoneNumber: "09123456789",
          password: "Torres",
        },
        {
          studentNumber: 20231010,
          name: "Kimberly P. Velasco",
          course: "BSCS",
          year: "3",
          role: "Student",
          section: "B",
          email: "20231010@gmail.com",
          phoneNumber: "09123456790",
          password: "Velasco",
        },
        {
          studentNumber: 20231011,
          name: "Michael H. Cruz",
          course: "BSIT",
          year: "1",
          role: "Student",
          section: "A",
          email: "20231011@gmail.com",
          phoneNumber: "09123456791",
          password: "Cruz",
        },
        {
          studentNumber: 20231012,
          name: "Anna L. Castillo",
          course: "BSCS",
          year: "2",
          role: "Student",
          section: "C",
          email: "20231012@gmail.com",
          phoneNumber: "09123456792",
          password: "Castillo",
        },
        {
          studentNumber: 20231013,
          name: "David N. Bautista",
          course: "BSIT",
          year: "4",
          role: "Student",
          section: "B",
          email: "20231013@gmail.com",
          phoneNumber: "09123456793",
          password: "Bautista",
        },
        {
          studentNumber: 20231014,
          name: "Jessica E. Lim",
          course: "BSCS",
          year: "3",
          role: "Student",
          section: "A",
          email: "20231014@gmail.com",
          phoneNumber: "09123456794",
          password: "Lim",
        },
        {
          studentNumber: 20231015,
          name: "Ryan O. Villanueva",
          course: "BSIT",
          year: "2",
          role: "Student",
          section: "D",
          email: "20231015@gmail.com",
          phoneNumber: "09123456795",
          password: "Villanueva",
        },
        {
          studentNumber: 20231016,
          name: "Christine S. Ramos",
          course: "BSCS",
          year: "1",
          role: "Student",
          section: "B",
          email: "20231016@gmail.com",
          phoneNumber: "09123456796",
          password: "Ramos",
        },
        {
          studentNumber: 20231017,
          name: "Joseph T. Gomez",
          course: "BSIT",
          year: "3",
          role: "Student",
          section: "C",
          email: "20231017@gmail.com",
          phoneNumber: "09123456797",
          password: "Gomez",
        },
        {
          studentNumber: 20231018,
          name: "Sophia D. Hernandez",
          course: "BSCS",
          year: "4",
          role: "Student",
          section: "D",
          email: "20231018@gmail.com",
          phoneNumber: "09123456798",
          password: "Hernandez",
        },
        {
          studentNumber: 20231019,
          name: "Nathan W. Fernandez",
          course: "BSIT",
          year: "1",
          role: "Student",
          section: "A",
          email: "20231019@gmail.com",
          phoneNumber: "09123456799",
          password: "Fernandez",
        },
        {
          studentNumber: 20231020,
          name: "Isabella C. Chua",
          course: "BSCS",
          year: "2",
          role: "Student",
          section: "B",
          email: "20231020@gmail.com",
          phoneNumber: "09123456800",
          password: "Chua",
        },
      ];
      await aimsStudentAccounts.bulkCreate(Subject);
      console.log("Students Information Inserted successfully");
    } else {
      console.log("Students Information already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Students Information:", error);
  }
};
