import turkey from "../images/turkey.png";
import feather1 from "../images/feather1.svg";
import feather2 from "../images/feather2.svg";
import feather3 from "../images/feather3.svg";
import feather4 from "../images/feather4.svg";
import feather5 from "../images/feather5.svg";
import feather6 from "../images/feather6.svg";
import feather7 from "../images/feather7.svg";
import feather8 from "../images/feather8.svg";
import feather9 from "../images/feather9.svg";
import featherA from "../images/featherA.svg";

function PictureDisplay ({ size, featherCount, featherColors }) {
    console.log('PictureDisplay', size, featherCount, featherColors);

    return (
        <div className="image-area medium">
            {featherCount >= 1 &&
                <img src={feather1} className="image-feather" alt="" />
            }
            {featherCount >= 2 &&
                <img src={feather2} className="image-feather" alt="" />
            }
            {featherCount >= 3 &&
                <img src={feather3} className="image-feather" alt="" />
            }
            {featherCount >= 4 &&
                <img src={feather4} className="image-feather" alt="" />
            }
            {featherCount >= 5 &&
                <img src={feather5} className="image-feather" alt="" />
            }
            {featherCount >= 6 &&
                <img src={feather6} className="image-feather" alt="" />
            }
            {featherCount >= 7 &&
                <img src={feather7} className="image-feather" alt="" />
            }
            {featherCount >= 8 &&
                <img src={feather8} className="image-feather" alt="" />
            }
            {featherCount >= 9 &&
                <img src={feather9} className="image-feather" alt="" />
            }
            {featherCount >= 10 &&
                <img src={featherA} className="image-feather" alt=""/>
            }

            <img src={turkey} className="image-turkey" alt="turkey" />
        </div>
    );
}

export default PictureDisplay;