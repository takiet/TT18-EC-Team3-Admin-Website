interface IResLogin {
  access: string;
}

interface IResGetListAllTutor {
  result: Array<IResTutor>;
}
interface IResTutor {
  _id: string;
  name: string;
  email: string;
  phone: number;
  avatar: string;
  address: string;
  gender: number;
  degree: Array<IResDegree>;
  DOB: IResDate;
  major: Array<IResMajor>;
  course: Array<IResCourse>;
  accent: string;
  quote: string;
  education: Array<IResEducation>;
  exp: string;
  rating: number;
  personality: string;
  noLike: number;
  noOngoingCourse: number;
  available: Array<IResAvailable>;
}

interface IResDegree {
  item: string;
}
interface IResMajor {
  item: string;
}
interface IResCourse {
  id: string;
}
interface IResEducation {
  item: string;
}
interface IResDate {
  day: number;
  month: number;
  year: number;
}
interface IResAvailable {
  day: string;
  time: Array<IResAvailableTime>;
}
interface IResAvailableTime {
  start: string;
  time: string;
}

interface IResGetCourse {
  _id?: string;
  name?: string;
  duration?: string;
  subject?: any;
  syllabus?: any;
  noLike?: number;
  rating?: number;
  tutorID?: Array<{ _id?: string; item?: string }>;
  price?: number;
  avatar?: string;
}
interface IResGetOneCourse {
  course: IResGetCourse;
}
interface IResGetListAllCourse {
  result: Array<IResGetCourse>;
}
