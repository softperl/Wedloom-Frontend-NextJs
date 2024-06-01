import TopNav from "@/components/topNav/topNav";
import MessageContainer from "@/components/vendorProfile/messages/messageContainer";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Copyright from "@/components/footer/copyright/copyRight";

const UserMessages = () => {
  return (
    <div className="bg-sectionBg-900">
      <TopNav />
      <Navbar />
      <div className="container w-full lg:w-7/12 mx-auto my-8">
        <MessageContainer
          border={true}
          // user={true}
        />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default UserMessages;
