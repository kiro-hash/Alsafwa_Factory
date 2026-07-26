export interface Branch {
  id: number;
  title: string;
  position: [number, number];
  phones: string[];
  telephone?: string;
  fax?: string;
  email?: string;
}

const branches: Branch[] = [
  {
    id: 1,
    title: "Factory",
    position: [31.2037, 30.5491],
    phones: ["01066673597", "01023236000"],
    email: "elseady_milk@yahoo.com",
  },

  {
    id: 2,
    title: "Cairo",
    position: [30.0444, 31.2357],
    phones: ["01001218691"],
  },

  {
    id: 3,
    title: "Tanta",
    position: [30.7865, 31.0004],
    phones: ["01009365302"],
  },

  {
    id: 4,
    title: "Mansoura",
    position: [31.0409, 31.3785],
    phones: ["01090904281"],
  },

  {
    id: 5,
    title: "Beheira",
    position: [31.0341, 30.4682],
    phones: ["01001033383"],
  },

  {
    id: 6,
    title: "Alexandria & Kafr El Sheikh",
    position: [31.2001, 29.9187],
    phones: ["01069818061"],
  },

  {
    id: 7,
    title: "Minya",
    position: [28.0871, 30.7618],
    phones: ["01090222815"],
  },
];

export default branches;
