import Helper from "../../Helper.jsx"



function BigCard({ plateforme, utilisateur, total, aujourdHui }) {
  const plateformeIcon = Helper.GetPlateformeIcon(plateforme);
  const plateformeColor = Helper.GetPlateformeColor(plateforme);

  const statIcon = Helper.GetStatformeIcon(aujourdHui);

  return (
    <section className="flex flex-col text-center bg-LightGrayishBlue gap-5 rounded-lg shadow-md overflow-hidden">
      <div className={`w-full h-1 ${plateformeColor}`}></div>
      <div className="flex justify-center gap-2">
        <img src={plateformeIcon} alt={plateforme} />
        <p className="text-sm">{utilisateur}</p>
      </div>
      <p className="text-5xl font-bold text-VeryDarkBlue">{total}</p>
      <div className="flex flex-row align-center justify-center text-center">
        <img className="w-4 h-4" src={statIcon} alt="Icon" />

        <p className={aujourdHui >= 0 ? "text-LimeGreen" : "text-BrightRed"}> {aujourdHui} Today</p>
      </div>
    </section>
  );
}


export default BigCard