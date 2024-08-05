"use client";
import { newEvent } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import { handelError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactDatePicker from "react-datepicker";
import toast from "react-hot-toast";

interface Errors {
  userType?: string;
  eventTitle?: string;
  location?: string;
  eventDate?: string;
}

const WeddingSetupBanner = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [userType, setUserType] = useState<string>("");
  const [eventTitle, setEventTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: Errors = {};
    if (!userType)
      validationErrors.userType =
        "Please select if you are the groom or bride.";
    if (!eventTitle) validationErrors.eventTitle = "Event title is required.";
    if (!location) validationErrors.location = "Location is required.";
    if (!eventDate) validationErrors.eventDate = "Event date is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        await newEvent({
          type: userType,
          title: eventTitle,
          location: location,
          date: eventDate,
        });
        setUserType("");
        setEventTitle("");
        setLocation("");
        setEventDate(null);
        router.push(
          user?.role === "Vendor" ? "/vendor/profile" : "/user/profile"
        );
        toast.success("Event Created Successfully");
      } catch (error) {
        handelError(error);
      }
    }
  };

  return (
    <div
      className="w-full h-full lg:h-[60vh] bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("http://weddingpakistani.com/wp-content/uploads/2017/03/13094358_799603150140839_7487438520438918512_n.jpg")`,
      }}>
      {/* Contents */}
      <div className="container mx-auto w-11/12 lg:w-10/12 h-full z-[1000] flex justify-between items-center flex-wrap lg:flex-nowrap gap-y-8 lg:gap-0 pt-6 pb-10 lg:py-0">
        {/* Left Side */}
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-medium">
            Your wedding, your way!
          </h1>
          <p className="text-sm lg:text-lg font-medium text-white mt-2">
            Simplify and manage all your wedding planning needs on{" "}
            <span className="text-textPrimary-900">WeedLoom</span>
          </p>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-center ">
          {/* Right Content */}
          <div className="lg:w-6/12 w-full bg-white p-4 shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
              {/* Heading */}
              <h2 className="text-textPrimary-900 text-[15px] font-bold">
                I am the
              </h2>

              {/* Groom or bride */}
              <div className="my-4">
                {/* Radio Buttons */}
                <div className="flex justify-between items-center pr-24">
                  <div>
                    <input
                      className="accent-textPrimary-900 scale-110"
                      type="radio"
                      id="Groom"
                      name="usertype"
                      value="Groom"
                      onChange={() => setUserType("Groom")}
                      checked={userType === "Groom"}
                    />
                    <label
                      className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                      htmlFor="Groom">
                      Groom
                    </label>
                  </div>

                  <div>
                    <input
                      className="accent-textPrimary-900 scale-110"
                      type="radio"
                      id="Bride"
                      name="usertype"
                      value="Bride"
                      onChange={() => setUserType("Bride")}
                      checked={userType === "Bride"}
                    />
                    <label
                      className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                      htmlFor="Bride">
                      Bride
                    </label>
                  </div>
                </div>
                {errors.userType && (
                  <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
                )}
              </div>

              {/* Wedding Title */}
              <div>
                <p className="text-xs md:text-sm text-textSecondary-900 font-bold">
                  EVENT TITLE
                </p>
                <input
                  type="text"
                  placeholder="e.g. Janu weds Manu"
                  className="w-full bg-transparent outline-none text-xs md:text-sm border-b focus:border-b-textPrimary-900 pb-2 mt-1 text-textSecondary-900"
                  value={eventTitle}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEventTitle(e.target.value)
                  }
                />
                {errors.eventTitle && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.eventTitle}
                  </p>
                )}
              </div>

              {/* Wedding Location */}
              <div className="my-3">
                <p className="text-xs md:text-sm text-textSecondary-900 font-bold">
                  LOCATION
                </p>
                <input
                  type="text"
                  placeholder="e.g. Karachi"
                  className="w-full bg-transparent outline-none text-xs md:text-sm border-b focus:border-b-textPrimary-900 pb-2 mt-1 text-textSecondary-900"
                  value={location}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLocation(e.target.value)
                  }
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              {/* Wedding Date */}
              <div className="my-4">
                <p className="text-xs md:text-sm text-textSecondary-900 font-bold">
                  EVENT DATE
                </p>
                <div className="border-b">
                  <ReactDatePicker
                    selected={eventDate}
                    onChange={(date: Date | null) => setEventDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="e.g. Jan 10, 2023"
                    className="outline-none border-none text-xs md:text-sm text-textSecondary-900 w-full mt-1 pb-2"
                  />
                </div>
                {errors.eventDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.eventDate}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="text-center mt-5 mb-1">
                <button
                  type="submit"
                  className="w-[95%] py-4 text-xs md:text-sm font-semibold rounded-md text-white bg-textPrimary-900">
                  CREATE EVENT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSetupBanner;
