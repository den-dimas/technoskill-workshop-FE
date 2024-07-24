import DashboardElement from "./elements/DashboardElement";

export default function HomePage() {
  return (
    <div className="bg-[#CED1DA] flex">
      <DashboardElement />

      <div className="bg-[#798DC5] w-[1400px] h-[841px] m-auto rounded-2xl flex-1">
        <ol className="overflow-auto w-full">
          {data.map((employee, index) => (
            <li
              key={index}
              className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl"
            >
              <p>{employee.name}</p>
              <p>{employee.div}</p>
              <p>{employee.salary}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const data = [
  {
    name: "ABC",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "JHK",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "POI",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "KKK",
    div: "HR",
    salary: "Rp 5000",
  },
];
