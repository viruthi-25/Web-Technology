export interface Patient {
    id: number;
    name: string;
    bill: number;
    Address: string;
  }

  export const pat: Patient[] = [
    { id: 1, name: "Viru", bill: 400002, Address:"RK Nagar" },
    { id: 2, name: "Yuva", bill: 49151, Address:"KR Nagar" },
    { id: 3, name: "Meena", bill: 17444,Address:"Anna Nagar" },
    { id: 4, name: "Deepi", bill: 9520, Address:"M K Nagar" },
    { id: 5, name: "Muru", bill: 63242, Address:"K M Nagar" },
  ];

import { pat, Patient } from "./patient";

function display(pat: Patient[]) {
  for (const p of pat) {
    console.log(`Patient ID: ${p.id}, Patient Name: ${p.name}, Bill: ${p.bill}, Address: ${p.Address}`);
  }
}

display(pat);
