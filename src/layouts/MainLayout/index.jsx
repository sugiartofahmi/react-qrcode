import Navbar from "../../components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      {children}
    </main>
  );
};
export default MainLayout;
