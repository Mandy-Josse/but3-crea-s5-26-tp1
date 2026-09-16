import Helper from "../../Helper.jsx"


function SmCard({plateforme, indicateur, montant, pourcentage}) {
    const plateformeIcon = Helper.GetPlateformeIcon(plateforme);
    const statIcon = Helper.GetStatformeIcon(pourcentage);


    return (
      <section className={`flex flex-col text-center gap-10 p-6 rounded-lg bg-LightGrayishBlue shadow-md px-20 py-10`}>  
        <div className="flex flex-row align-center justify-between text-center">
          <p>{indicateur}</p>
          <img src={plateformeIcon} alt={plateforme}/>
        </div>

        <div className="flex flex-row justify-between">
          <p>{montant}</p>
          <div className="flex flex-row justify-between">
            <img className="w-4 h-4" src={statIcon} alt="Icon" />
            <p className={pourcentage >= 0 ? "text-LimeGreen" : "text-BrightRed"}> {pourcentage} %</p>
          </div>
        </div>


      </section>
    );
  }


export default SmCard