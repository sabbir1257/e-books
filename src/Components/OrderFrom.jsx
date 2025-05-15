import { useForm } from "react-hook-form";

const OrderFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const product = {
    title:
      "Bangla Scale: দেশীয় উপায়ে ফেসবুক অ্যাড স্কেলিং + প্রাইভেট কমিউনিটি + 🔴 LIVE Sessions",
    price: 199.0,
    image: "https://i.ibb.co/cct0Pgzj/eBook1.jpg",
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle order logic or API call here
  };

  return (
    <div>
      <h1 className="text-[#c90053] bg-[#fce6fe] text-[20px] py-4 text-center rounded-2xl font-semibold border-2 border-dashed">
        ভাইজান! মাত্র ১ মিনিটেই ই-বুক+কমিউনিটি পেতে এখনই অর্ডার করুন!
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto mt-10 border border-pink-200 p-6 rounded shadow-md text-sm font-sans bg-white"
      >
        <h2 className="text-lg font-bold mb-4">
          অর্ডার করতে আপনার কিছু তথ্য লাগবে
        </h2>

        <input
          {...register("name", { required: "নাম অবশ্যই দিতে হবে" })}
          placeholder="আপনার নাম *"
          className="w-full border rounded px-4 py-2 mb-2"
        />
        {errors.name && (
          <p className="text-red-500 mb-2">{errors.name.message}</p>
        )}

        <input
          {...register("whatsapp", { required: "হোয়াটসঅ্যাপ নাম্বার দিন" })}
          placeholder="হোয়াটসঅ্যাপ নাম্বার *"
          className="w-full border rounded px-4 py-2 mb-2"
        />
        {errors.whatsapp && (
          <p className="text-red-500 mb-2">{errors.whatsapp.message}</p>
        )}

        <input
          {...register("email", {
            required: "ইমেইল দিন",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "ভালid ইমেইল দিন",
            },
          })}
          placeholder="ইমেইল *"
          className="w-full border rounded px-4 py-2 mb-2"
        />
        {errors.email && (
          <p className="text-red-500 mb-2">{errors.email.message}</p>
        )}

        <h3 className="font-bold text-purple-600 mt-6 mb-2">Your Products</h3>
        <div className="border rounded-lg p-3 flex gap-3 items-center mb-5">
          <input type="radio" checked readOnly />
          <img
            src={product.image}
            alt="Product"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div>
            <p className="font-medium">{product.title}</p>
            <p className="text-sm mt-1">{product.price.toFixed(2)}৳</p>
          </div>
        </div>

        <h3 className="font-bold text-gray-800 mb-2">Your order</h3>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-2">
            <span>{product.title}</span>
            <span>{product.price.toFixed(2)}৳</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span className="text-purple-600">{product.price.toFixed(2)}৳</span>
          </div>
        </div>

        <input
          {...register("coupon")}
          placeholder="Coupon Code"
          className="w-full mt-4 border rounded px-4 py-2"
        />
        <button
          type="button"
          className="w-full bg-purple-600 text-white mt-2 py-2 rounded hover:bg-purple-700"
        >
          Apply
        </button>

        <div className="mt-6">
          <h4 className="font-bold mb-2">পেমেন্ট পদ্ধতি</h4>

          <label className="block mb-2">
            <input
              type="radio"
              value="auto"
              {...register("paymentMethod", { required: true })}
              defaultChecked
              className="mr-2"
            />
            <strong>Bangla Scale (অটোমেটিক পেমেন্ট)</strong>
            <ul className="text-sm ml-6 mt-2 list-disc">
              <li>“অর্ডার দিন” এ ক্লিক করুন</li>
              <li>“M-Banking” এ গিয়ে পেমেন্ট করুন</li>
              <li>কার্ড দিয়েও পেমেন্ট করতে পারবেন</li>
            </ul>
          </label>

          <label className="block mt-4">
            <input
              type="radio"
              value="manual"
              {...register("paymentMethod")}
              className="mr-2"
            />
            Bangla Scale (ম্যানুয়াল, সেন্ড মানি)
          </label>
        </div>

        {errors.paymentMethod && (
          <p className="text-red-500 mt-2">পেমেন্ট অপশন সিলেক্ট করুন</p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 mt-6 rounded-lg font-bold text-lg shadow-md"
        >
          🔒 অর্ডার দিন {product.price.toFixed(2)}৳
        </button>
      </form>
    </div>
  );
};

export default OrderFrom;
