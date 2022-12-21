import HashLoader from "react-spinners/HashLoader";
const override = {
  margin: "0 auto",
  borderColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};
const Spiner = () => {
  return (
    <div>
    <HashLoader
          color={"#01fcbd"}
          loading={true}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  )
}

export default Spiner