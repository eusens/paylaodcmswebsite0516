import Image from 'next/image'

type Manufacturer = {
    filename: string;
    manufacturer_name: string;
  };
  
  const manufacturers: Manufacturer[] = [
    {
      "filename": "tdk.png",
      "manufacturer_name": "Tdk"
    },
    {
      "filename": "bernstien1.png",
      "manufacturer_name": "Bernstien1"
    },
    {
      "filename": "vem.png",
      "manufacturer_name": "Vem"
    },
    {
      "filename": "indra.png",
      "manufacturer_name": "Indra"
    },
    {
      "filename": "brad.png",
      "manufacturer_name": "Brad"
    },
    {
      "filename": "gef.png",
      "manufacturer_name": "Gef"
    },
    {
      "filename": "aeg2.png",
      "manufacturer_name": "Aeg2"
    },
    {
      "filename": "kinco.png",
      "manufacturer_name": "Kinco"
    },
    {
      "filename": "rotork.png",
      "manufacturer_name": "Rotork"
    },
    {
      "filename": "beijer.png",
      "manufacturer_name": "Beijer"
    },
    {
      "filename": "smc.png",
      "manufacturer_name": "Smc"
    },
    {
      "filename": "omran1.png",
      "manufacturer_name": "Omran1"
    },
    {
      "filename": "finder.png",
      "manufacturer_name": "Finder"
    },
    {
      "filename": "buss.png",
      "manufacturer_name": "Buss"
    },
    {
      "filename": "panasonic.png",
      "manufacturer_name": "Panasonic"
    },
    {
      "filename": "hubner.png",
      "manufacturer_name": "Hubner"
    },
    {
      "filename": "yoko.png",
      "manufacturer_name": "Yoko"
    },
    {
      "filename": "zie.png",
      "manufacturer_name": "Zie"
    },
    {
      "filename": "infi.png",
      "manufacturer_name": "Infi"
    },
    {
      "filename": "ifm-electronic.png",
      "manufacturer_name": "Ifm Electronic"
    },
    {
      "filename": "kuhnke.png",
      "manufacturer_name": "Kuhnke"
    },
    {
      "filename": "siemens.png",
      "manufacturer_name": "Siemens"
    },
    {
      "filename": "cutler.png",
      "manufacturer_name": "Cutler"
    },
    {
      "filename": "koll.png",
      "manufacturer_name": "Koll"
    },
    {
      "filename": "marsh.png",
      "manufacturer_name": "Marsh"
    },
    {
      "filename": "ada.png",
      "manufacturer_name": "Ada"
    },
    {
      "filename": "sauer.png",
      "manufacturer_name": "Sauer"
    },
    {
      "filename": "key.png",
      "manufacturer_name": "Key"
    },
    {
      "filename": "festo.png",
      "manufacturer_name": "Festo"
    },
    {
      "filename": "novo.png",
      "manufacturer_name": "Novo"
    },
    {
      "filename": "dell.png",
      "manufacturer_name": "Dell"
    },
    {
      "filename": "schn.png",
      "manufacturer_name": "Schn"
    },
    {
      "filename": "mitsub.png",
      "manufacturer_name": "Mitsub"
    },
    {
      "filename": "bosch.png",
      "manufacturer_name": "Bosch"
    },
    {
      "filename": "sprint.png",
      "manufacturer_name": "Sprint"
    },
    {
      "filename": "moog.png",
      "manufacturer_name": "Moog"
    },
    {
      "filename": "etn.png",
      "manufacturer_name": "Etn"
    },
    {
      "filename": "harting.png",
      "manufacturer_name": "Harting"
    },
    {
      "filename": "dana.png",
      "manufacturer_name": "Dana"
    },
    {
      "filename": "control.png",
      "manufacturer_name": "Control"
    },
    {
      "filename": "lenze.png",
      "manufacturer_name": "Lenze"
    },
    {
      "filename": "banner1.png",
      "manufacturer_name": "Banner1"
    },
    {
      "filename": "leuze.png",
      "manufacturer_name": "Leuze"
    },
    {
      "filename": "honey.png",
      "manufacturer_name": "Honey"
    },
    {
      "filename": "dold.png",
      "manufacturer_name": "Dold"
    },
    {
      "filename": "bentloy1.png",
      "manufacturer_name": "Bentloy1"
    },
    {
      "filename": "toshiba.png",
      "manufacturer_name": "Toshiba"
    },
    {
      "filename": "moller.png",
      "manufacturer_name": "Moller"
    },
    {
      "filename": "sanyo.png",
      "manufacturer_name": "Sanyo"
    },
    {
      "filename": "phenix.png",
      "manufacturer_name": "Phenix"
    },
    {
      "filename": "ferraz.png",
      "manufacturer_name": "Ferraz"
    },
    {
      "filename": "wood.png",
      "manufacturer_name": "Wood"
    },
    {
      "filename": "berger2.png",
      "manufacturer_name": "Berger2"
    },
    {
      "filename": "guard.png",
      "manufacturer_name": "Guard"
    },
    {
      "filename": "lapp.png",
      "manufacturer_name": "Lapp"
    },
    {
      "filename": "fluke.png",
      "manufacturer_name": "Fluke"
    },
    {
      "filename": "abb.png",
      "manufacturer_name": "Abb"
    },
    {
      "filename": "hen.png",
      "manufacturer_name": "Hen"
    },
    {
      "filename": "tur.png",
      "manufacturer_name": "Tur"
    },
    {
      "filename": "parker.png",
      "manufacturer_name": "Parker"
    },
    {
      "filename": "mean.png",
      "manufacturer_name": "Mean"
    },
    {
      "filename": "weg.png",
      "manufacturer_name": "Weg"
    },
    {
      "filename": "rencher.png",
      "manufacturer_name": "Rencher"
    },
    {
      "filename": "crouzet1.png",
      "manufacturer_name": "Crouzet1"
    },
    {
      "filename": "delta.png",
      "manufacturer_name": "Delta"
    },
    {
      "filename": "national.png",
      "manufacturer_name": "National"
    },
    {
      "filename": "allen1.png",
      "manufacturer_name": "Allen1"
    },
    {
      "filename": "murr.png",
      "manufacturer_name": "Murr"
    },
    {
      "filename": "pacific.png",
      "manufacturer_name": "Pacific"
    },
    {
      "filename": "vega.png",
      "manufacturer_name": "Vega"
    },
    {
      "filename": "sew.png",
      "manufacturer_name": "Sew"
    },
    {
      "filename": "cognex.png",
      "manufacturer_name": "Cognex"
    },
    {
      "filename": "skf1.png",
      "manufacturer_name": "Skf1"
    },
    {
      "filename": "fuji.png",
      "manufacturer_name": "Fuji"
    },
    {
      "filename": "cabur.png",
      "manufacturer_name": "Cabur"
    },
    {
      "filename": "logo.png",
      "manufacturer_name": "Logo"
    },
    {
      "filename": "fanuc1.png",
      "manufacturer_name": "Fanuc1"
    },
    {
      "filename": "kontron.png",
      "manufacturer_name": "Kontron"
    },
    {
      "filename": "nec.png",
      "manufacturer_name": "Nec"
    },
    {
      "filename": "tyco.png",
      "manufacturer_name": "Tyco"
    },
    {
      "filename": "mituto.png",
      "manufacturer_name": "Mituto"
    },
    {
      "filename": "moxa.png",
      "manufacturer_name": "Moxa"
    },
    {
      "filename": "ebm.png",
      "manufacturer_name": "Ebm"
    },
    {
      "filename": "tera.png",
      "manufacturer_name": "Tera"
    },
    {
      "filename": "ics.png",
      "manufacturer_name": "Ics"
    },
    {
      "filename": "sharp.png",
      "manufacturer_name": "Sharp"
    },
    {
      "filename": "vipa.png",
      "manufacturer_name": "Vipa"
    },
    {
      "filename": "emerson.png",
      "manufacturer_name": "Emerson"
    },
    {
      "filename": "hir.png",
      "manufacturer_name": "Hir"
    },
    {
      "filename": "finomotor.png",
      "manufacturer_name": "Finomotor"
    },
    {
      "filename": "backoff1.png",
      "manufacturer_name": "Backoff1"
    },
    {
      "filename": "insys.png",
      "manufacturer_name": "Insys"
    },
    {
      "filename": "schmer.png",
      "manufacturer_name": "Schmer"
    },
    {
      "filename": "pilz.png",
      "manufacturer_name": "Pilz"
    },
    {
      "filename": "prosofft.png",
      "manufacturer_name": "Prosofft"
    },
    {
      "filename": "hitachi.png",
      "manufacturer_name": "Hitachi"
    },
    {
      "filename": "peppral.png",
      "manufacturer_name": "Peppral"
    },
    {
      "filename": "fanuc.png",
      "manufacturer_name": "Fanuc"
    },
    {
      "filename": "sola.png",
      "manufacturer_name": "Sola"
    },
    {
      "filename": "euchner.png",
      "manufacturer_name": "Euchner"
    },
    {
      "filename": "keb.png",
      "manufacturer_name": "Keb"
    },
    {
      "filename": "automation.png",
      "manufacturer_name": "Automation"
    },
    {
      "filename": "okuma.png",
      "manufacturer_name": "Okuma"
    },
    {
      "filename": "fox.png",
      "manufacturer_name": "Fox"
    },
    {
      "filename": "rittal.png",
      "manufacturer_name": "Rittal"
    },
    {
      "filename": "modi.png",
      "manufacturer_name": "Modi"
    },
    {
      "filename": "sick.png",
      "manufacturer_name": "Sick"
    },
    {
      "filename": "balluff-(2).png",
      "manufacturer_name": "Balluff "
    },
    {
      "filename": "idec.png",
      "manufacturer_name": "Idec"
    },
    {
      "filename": "wago.png",
      "manufacturer_name": "Wago"
    },
    {
      "filename": "yask.png",
      "manufacturer_name": "Yask"
    },
    {
      "filename": "balluff-(3).png",
      "manufacturer_name": "Balluff"
    },
    {
      "filename": "weid.png",
      "manufacturer_name": "Weid"
    },
    {
      "filename": "danfoss.png",
      "manufacturer_name": "Danfoss"
    },
    {
      "filename": "tele.png",
      "manufacturer_name": "Tele"
    },
    {
      "filename": "semi.png",
      "manufacturer_name": "Semi"
    },
    {
      "filename": "bello.png",
      "manufacturer_name": "Bello"
    },
    {
      "filename": "krom.png",
      "manufacturer_name": "Krom"
    },
    {
      "filename": "square.png",
      "manufacturer_name": "Square"
    },
    {
      "filename": "fortress.png",
      "manufacturer_name": "Fortress"
    },
    {
      "filename": "leroy.png",
      "manufacturer_name": "Leroy"
    },
    {
      "filename": "spirax.png",
      "manufacturer_name": "Spirax"
    },
    {
      "filename": "crouse.png",
      "manufacturer_name": "Crouse"
    },
    {
      "filename": "endress.png",
      "manufacturer_name": "Endress"
    },
    {
      "filename": "kuka.png",
      "manufacturer_name": "Kuka"
    },
    {
      "filename": "bongi.png",
      "manufacturer_name": "Bongi"
    },
    {
      "filename": "rousemount.png",
      "manufacturer_name": "Rousemount"
    },
    {
      "filename": "pro.png",
      "manufacturer_name": "Pro"
    },
    {
      "filename": "vacon.png",
      "manufacturer_name": "Vacon"
    },
    {
      "filename": "msme logo.png",
      "manufacturer_name": "Msme Logo"
    },
    {
      "filename": "texas.png",
      "manufacturer_name": "Texas"
    }
  ];
  
  export default function BrandPage() {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Manufacturers We Service</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {manufacturers.map((mfg, index) => (
            <div key={index} className="text-center">
              <Image
                  src={`https://a-payloadcms.s3.us-west-2.amazonaws.com/media/${mfg.filename}`}
                  alt={mfg.manufacturer_name}
                  width={128} // or whatever width you want
                  height={64} // or auto if you use layout
                  className="mx-auto object-contain h-16"
                />
              <p className="mt-2 text-sm font-medium">{mfg.manufacturer_name}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  