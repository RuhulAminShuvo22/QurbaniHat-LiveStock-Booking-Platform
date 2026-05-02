import Image from "next/image";

const tipsData = [
  {
    id: 1,
    title: "Healthy Animal Choose Korar Tips",
    desc: "Goru ba chagol kinar somoy tar chokh, daat, chal-chalon dekho. Roga ba osustho prani keno na.",
    img: "/tips/healthy.jpg",
  },
  {
    id: 2,
    title: "Boyosh Check Kora",
    desc: "Qurbani er jonno prani er minimum boyosh thaka dorkar. Goru 2 bochor, chagol 1 bochor.",
    img: "/tips/age.jpg",
  },
  {
    id: 3,
    title: "Kurbani Shomoy Hygiene Maintain",
    desc: "Porishkar jaygay qurbani dao. Rokto properly clean koro jate environment clean thake.",
    img: "/tips/hygiene.jpg",
  },
  {
    id: 4,
    title: "Mangsho Bonton System",
    desc: "Mangsho 3 vag e vag koro: nijer jonno, atiyo-swojon, gorib manush.",
    img: "/tips/meat.jpg",
  },
];

const TipsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8 text-center">
        🐄 Qurbani Tips
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tipsData.map((tip) => (
          <div
            key={tip.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={tip.img}
              alt={tip.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">
                {tip.title}
              </h2>

              <p className="text-sm text-gray-600">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default TipsPage;