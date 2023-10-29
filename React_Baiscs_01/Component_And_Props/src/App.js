import User from "./components/User";
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
  const response = [
    {
      name: "Akanshu",
      day: 5,
      month: 11,
      year: 2000,
    },

    {
      name: "Sagar",
      day: 8,
      month: 5,
      year: 1995,
    },

    {
      name: "Sunny",
      day: 15,
      month: 7,
      year: 1979,
    },
  ];

  return (
    <div>
      <Cards>
        <Card>
          <User
            name={response[0].name}
            day={response[0].day}
            month={response[0].month}
            year={response[0].year}
          ></User>
        </Card>
        <Card>
          <User
            name={response[1].name}
            day={response[1].day}
            month={response[1].month}
            year={response[1].year}
          ></User>
        </Card>
        <Card>
          <User
            name={response[2].name}
            day={response[2].day}
            month={response[2].month}
            year={response[2].year}
          ></User>
        </Card>
      </Cards>
    </div>
  );
}

export default App;
