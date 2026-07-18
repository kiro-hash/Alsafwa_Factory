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
    position: [31.2115, 29.9440],
    phones: ["01066618757", "01066673597"],
    telephone: "002047296400",
    fax: "0020472964003",
    email: "elseady_milk@yahoo.com",
  },

  {
    id: 2,
    title: "Sales Manager",
    position: [30.0444, 31.2357],
    phones: [
      "01001218691"
    ]
  },

  {
    id: 3,
    title: "Cairo Sales",
    position: [30.0444, 31.2357],
    phones: [
      "01022206004"
    ]
  },

  {
    id: 4,
    title: "Delta Sales",
    position: [30.8794, 31.2001],
    phones: [
      "01009365302"
    ]
  },

  {
    id: 5,
    title: "Beheira Sales",
    position: [30.8481, 30.3436],
    phones: [
      "01001033383"
    ]
  },

  {
    id: 6,
    title: "Alexandria Sales",
    position: [31.2001, 29.9187],
    phones: [
      "01060003105"
    ]
  },

  {
    id: 7,
    title: "Kafr El Sheikh Sales",
    position: [31.1117, 30.9399],
    phones: [
      "01069818061"
    ]
  }
];

export default branches;