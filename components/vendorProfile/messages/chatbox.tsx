"use client";
import React from "react";
import CustomarMessage from "@/components/vendorProfile/messages/customarMessage";
import VendorMessage from "@/components/vendorProfile/messages/vendorMessage";

const Chatbox = () => {
  return (
    /* Message Box */
    <div className="w-full h-full flex justify-end flex-col">
      {/* Messages */}
      <div className="overflow-y-scroll flex flex-col-reverse px-4 py-2 h-full">
        <div>
          <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
          <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
          <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
          <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
          <CustomarMessage
            img="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
            text="Hi, are you available to talk?"
          />
          <VendorMessage text="Yes sir, How can i assist you? I would love to help you!" />
          <CustomarMessage
            img="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
            text="Well, I have to reserve a custom wedding package. Can you handle all of my requirements?"
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
