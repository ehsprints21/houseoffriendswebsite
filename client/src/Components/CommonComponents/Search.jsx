import classes from "../../Modules/Search.module.css";
const Search = (props) => {
  return (
    <form className={classes.searchform}>
      <div className={classes.searchicon}>
        <img src="/assets/search.png" />
      </div>
      <input
        type="text"
        placeholder="Search for locality, projects, aparments or builders"
      />
      <select>
        <option value={"India"}>All India</option>
        <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
        <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
        <option value={"Assam"}>Assam</option>
        <option value={"Bihar"}>Bihar</option>
        <option value={"Chhattisgarh"}>Chhattisgarh</option>
        <option value={"Goa"}>Goa</option>
        <option value={"Gujarat"}>Gujarat</option>
        <option value={"Haryana"}>Haryana</option>
        <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
        <option value={"Jharkhand"}>Jharkhand</option>
        <option value={"Karnataka"}>Karnataka</option>
        <option value={"Kerala"}>Kerala</option>
        <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
        <option value={"Maharashtra"}>Maharashtra</option>
        <option value={"Manipur"}>Manipur</option>
        <option value={"Meghalaya"}>Meghalaya</option>
        <option value={"Mizoram"}>Mizoram</option>
        <option value={"Nagaland"}>Nagaland</option>
        <option value={"Odisha"}>Odisha</option>
        <option value={"Punjab"}>Punjab</option>
        <option value={"Rajasthan"}>Rajasthan</option>
        <option value={"Sikkim"}>Sikkim</option>
        <option value={"Tamil Nadu"}>Tamil Nadu</option>
        <option value={"Telangana"}>Telangana</option>
        <option value={"Tripura"}>Tripura</option>
        <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
        <option value={"Uttarakhand"}>Uttarakhand</option>
        <option value={"West Bengal"}>West Bengal</option>
        <option value={"Delhi"}>Delhi</option>
        <option value={"Jammu and Kashmir"}>Jammu & Kashmir</option>
        <option value={"Lakshadweep"}>Lakshadweep</option>
        <option value={"Puducherry"}>Puducherry</option>
        <option value={"Andaman & Nicobar"}>Andaman & Nicobar</option>
      </select>
    </form>
  );
};
export default Search;
