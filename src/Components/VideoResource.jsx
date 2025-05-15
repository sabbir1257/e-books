import React from "react";

const VideoResource = () => {
  return (
    <div className="text-center grid gap-4 bg-[#350083] py-12 rounded-3xl ">
      <h1 className="text-[#ffe97a] text-3xl font-semibold">
        🎁 Surprise LIVE Session & Premium Video Resources
      </h1>
      <p className="text-white">
        🎁 বোনাস! ই-বুক দিবে গাইডলাইন/পথ নির্দেশনা, আর ডিটেইল জাম্প করা হবে
        ভিডিও রিসোর্স ও লাইভ সেশানের মাধ্যমে!
      </p>
      <div className="flex gap-4 justify-center">
        <iframe
          className="rounded-3xl bg-[#2e0060] p-4"
          width="300"
          height="215"
          src="https://www.youtube.com/embed/BbQdrUtmJEU?si=qC57OlqFvAVZ6klx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="rounded-3xl bg-[#2e0060] p-4"
          width="300"
          height="215"
          src="https://www.youtube.com/embed/Sa76r7Kbpds?si=cbF3qCbbBDLa0xQf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex w-[300px] items-center bg-gradient-to-r from-[#ffe670] via-[#ffcb0f] to-[#ffcb0f] p-4 rounded-3xl">
          <h1 className="text-[#5e00b6] font-semibold">🎓 সকল নতুন এক্সক্লুসিভ কন্টেন্ট শুধুমাত্র পাবেন মেম্বাররাই!</h1>
          <button className="bg-[#5e00b6] text-white py-2 px-3 rounded-full font-semibold">GET Members Access!</button>
        </div>
      </div>
    </div>
  );
};

export default VideoResource;
