import React from "react";
import Slider from "./Slider";

const WhatsAppFacebookCommunityAccess = () => {
  return (
    <div className="bg-[#f7e9ff] py-12 text-center rounded-3xl shadow-2xl my-12"> 
      <h1>🚀 WhatsApp & Facebook Private Community Access</h1>
      <p>
        শুধু রেজাল্ট চান এমন উদ্যোক্তা ও মার্কেটারদের জন্য তৈরি — স্ক্রিনশটই সব
        প্রমাণ!
      </p>
      <Slider jsonUrl={'/public/TableOfContents.json'}/>
      <button className="mt-6 py-2 text-[20px] text-white px-4 font-semibold rounded-3xl bg-gradient-to-r from-[#ff025b] via-[#ff3b8d] to-[#ff3b8d]">🚀 ই-বুক ও 2000+ মেম্বার কমিউনিটি+ 🟡LIVE Session একসাথে এক্সেস নিন!</button>
    </div>
  );
};

export default WhatsAppFacebookCommunityAccess;
