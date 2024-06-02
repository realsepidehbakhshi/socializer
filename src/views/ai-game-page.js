import React, { useEffect, useState } from "react";

import Script from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Gallery4 from "../components/gallery4";
import "./game-page.css";
import { radioOptions } from "../lib/data";
import CircleLoader from "react-spinners/CircleLoader";
import { Footer } from "../components/Footer";
import { getAIQuestion, setAnswer } from "../api/user";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: 70,
  marginBottom: 30,
};

const AIGamePage = (props) => {
  const [gameLib, setGameLib] = useState([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingType, setLoadingType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [asnwers, setAnswers] = useState({});
  const calculate = () => {
    if (Object.entries(asnwers).length >= step) {
      setLoading(true);
      setLoadingType("Calculating ...");
      setTimeout(async () => {
        await setAnswer({
          answers: [
            { questionId: 1, answer: asnwers[1] },
            { questionId: 2, answer: asnwers[2] },
            { questionId: 3, answer: asnwers[3] },
            { questionId: 4, answer: asnwers[4] },
            { questionId: 5, answer: asnwers[5] },
            { questionId: 6, answer: asnwers[6] },
            { questionId: 7, answer: asnwers[7] },
            { questionId: 8, answer: asnwers[8] },
            { questionId: 9, answer: asnwers[9] },
            { questionId: 10, answer: asnwers[10] },
          ],
        });
        setShowResults(true);
        setLoading(false);
      }, 3000);
    } else {
      alert("Select your answer to continue");
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setLoadingType("Talking to AI ...");
      const promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(async (item) => {
        const res = await getAIQuestion({
          random: true,
          emotionType: "ENJOYMENT",
        });

        if (res?.status === 200) {
          const { question, emotionType } = res.data;
          return {
            id: item,
            img: radioOptions.find(
              (option) => option.value === emotionType.toLowerCase()
            ).img,
            text: `${item} - ${question}`,
            radioOptions: radioOptions,
            answer: emotionType.toLowerCase(),
          };
        }

        return null;
      });

      try {
        const results = await Promise.all(promises);
        const filteredResults = results.filter((result) => result !== null);
        setGameLib(filteredResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching AI questions:", error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  return (
    <div className="game-page-container">
      <Helmet>
        <title>ai-game-page - Socializer</title>
        <meta property="og:title" content="game-page - Socializer" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>

      {!loading && !showResults && (
        <section className="game-page-hero">
          <div className="game-page-heading">
            <p className="game-page-caption">
              <span>AI Practice - </span>
              <span>Choose the right emotion</span>
            </p>
            {gameLib.map((item, index) => {
              if (step === index + 1) {
                return (
                  <Gallery4
                    key={index}
                    data={item}
                    onSelect={(e) => {
                      const updated_answers = { ...asnwers };
                      updated_answers[e.id] = e.value;
                      setAnswers(updated_answers);
                    }}
                    currentAnswer={asnwers[item.id]}
                  />
                );
              }
            })}
            <div style={{ display: "flex", gap: 10 }}>
              {step > 1 ? (
                <div
                  className="gallery4-button thq-button-filled"
                  onClick={() => setStep(step - 1)}
                  style={{ height: 42 }}
                >
                  <span className="gallery4-text5 thq-body-small">
                    Prevoius
                  </span>
                </div>
              ) : (
                ""
              )}
              {step !== 10 ? (
                <div
                  className="gallery4-button thq-button-filled"
                  onClick={() => {
                    if (Object.entries(asnwers).length >= step) {
                      setStep(step + 1);
                    } else {
                      alert("Select your answer to continue");
                    }
                  }}
                  style={{ height: 42 }}
                >
                  <span className="gallery4-text5 thq-body-small">Next</span>
                </div>
              ) : (
                <div
                  className="gallery4-button thq-button-filled"
                  style={{ height: 42 }}
                  onClick={calculate}
                >
                  <span className="gallery4-text5 thq-body-small">Submit</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <CircleLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {loading && (
        <div style={{ color: "white", marginBottom: 80 }}>{loadingType}</div>
      )}

      {showResults && (
        <div className="game-page-hero">
          <div
            style={{
              display: "flex",
              color: "white",

              marginTop: 40,
              flexDirection: "column",
              gap: 25,
            }}
          >
            {gameLib.map((item) => {
              return (
                <div style={{ display: "flex", gap: 15 }}>
                  <div style={{ marginRight: 60, width: 400 }}>{item.text}</div>
                  <div style={{ display: "flex", gap: 15, with: 150 }}>
                    <div>
                      Your Asnwer:{" "}
                      <span
                        style={{
                          color:
                            item.answer === asnwers[item.id] ? "green" : "red",
                        }}
                      >
                        {asnwers[item.id]}
                      </span>
                    </div>
                    <div>Correct Asnwer: {item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />

      <div>
        <div className="game-page-container2">
          <Script
            html={`<script>
            (function() {
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
})();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default AIGamePage;
