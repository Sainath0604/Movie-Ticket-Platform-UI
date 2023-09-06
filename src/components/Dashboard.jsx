import Banner from "./Banner";
import Feed from "./Feed";
import SearchBar from "./Searchbar";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <div>
        <SearchBar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default Dashboard;
