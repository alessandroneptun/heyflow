import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <div className="home-hero">
        <div className="home-hero1">
          <img
            alt="image"
            src="/playground_assets/integrityor.svg"
            className="home-image"
          />
          <button type="button" className="home-button button">
            <span>
              <span className="home-text01">Meldung einreic</span>
              <span>hen</span>
            </span>
          </button>
        </div>
      </div>
      <div className="home-container01">
        <div className="home-container02">
          <div className="home-container03">
            <span className="home-text03">
              Wir ermutigen Sie, Ihren Hinweis abzugeben
            </span>
          </div>
        </div>
      </div>
      <div className="home-container04">
        <div className="home-container05">
          <img
            alt="image"
            src="/playground_assets/integrityicon.svg"
            className="home-image1"
          />
          <h2 className="home-text04">Hinweis Portal</h2>
          <span className="home-text05">Hinweis Portal</span>
          <span className="home-text06">
            Geben Sie Ihren Hinweis ganz einfach online über unser Portal ab.
            (auch anonym möglich)
          </span>
          <span className="home-text07">
            Whistleblowing, das Enthüllen von Informationen, die eine Verletzung
            des Gesetzes, unethisches Verhalten oder Gefahr für die
            Öffentlichkeit darstellen, ist ein wichtiges Instrument zum Schutz
            von Menschen und Organisationen vor Missbrauch und Gefahren. Um
            diesen Menschen und Unternehmen zu helfen, haben wir ein Meldeportal
            für Hinweisgeber (Whistleblower) eingerichtet.
          </span>
          <button type="button" className="home-button1 button">
            <span>
              <span>Hinweis Online einreichen</span>
              <br></br>
            </span>
          </button>
        </div>
        <div className="home-container06">
          <img
            alt="image"
            src="/playground_assets/integrityicon.svg"
            className="home-image2"
          />
          <h2 className="home-text11">Hinweis Portal</h2>
          <span className="home-text12">Hinweis Portal</span>
          <span className="home-text13">Telefonische Hinweise unter</span>
          <h2 className="home-text14">+49 (0) 800 123 456 78</h2>
          <span className="home-text15">
            Wenn Sie anonym bleiben möchten, können Sie sich auch an unseren
            unseren Anrufservice wenden, der sicherstellt, dass Ihre Eingabe
            vertraulich und anonym bleibt. So können Sie ganz einfach helfen,
            ungesetzliche und unethische Aktivitäten zu verhindern und die Welt
            ein Stückchen besser zu machen.
          </span>
        </div>
      </div>
      <div className="home-container07">
        <h2 className="home-text16">Integrityportal Meldestelle</h2>
        <span className="home-text17">
          Mit unserem Meldeportal können alle Personen, die glauben, dass
          missbräuchliche Aktivitäten in einer Firma, Organisation oder Gemeinde
          vorliegen, sicher und optional auch anonym ihren Hinweis einreichen
          und uns beim Schutz von Menschen und Unternehmen unterstützen. Es ist
          sehr wichtig, dass Whistleblower anonym bleiben können, da sie sonst
          Angst haben könnten, dass sie Kosten oder Nachteile erleiden, wenn sie
          melden. Mit unserem Meldeportal können sie sicher und diskret helfen.
        </span>
        <div>
          <DangerousHTML
            html={`<heyflow flow-id="hello-e340e3" height="600px" width="100%" pass-parameters dynamic-height></heyflow>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="home-container08">
        <h2 className="home-text18">FAQ (Häufige Fragen)</h2>
        <div className="home-container09">
          <h2 className="home-text19">
            Muss ich anlässlich meiner Meldung Nachteile befürchten?
          </h2>
          <span className="home-text20">
            Mit unserem Meldeportal können alle Personen, die glauben, dass
            missbräuchliche Aktivitäten in einer Firma, Organisation oder
            Gemeinde vorliegen, sicher und optional auch anonym ihren Hinweis
            einreichen und uns beim Schutz von Menschen und Unternehmen
            unterstützen. Es ist sehr wichtig, dass Whistleblower anonym bleiben
            können, da sie sonst Angst haben könnten, dass sie Kosten oder
            Nachteile erleiden, wenn sie melden. Mit unserem Meldeportal können
            sie sicher und diskret helfen.
          </span>
          <h2 className="home-text21">
            Wie kann ich meine Meldung einreichen?
          </h2>
          <span className="home-text22">
            Sie haben die Möglichkeit, Ihre Meldung schriftlich, mündlich oder
            persönlich einzureichen. Welchen Weg Sie bevorzugen, bleibt Ihnen
            unbenommen.
          </span>
          <h2 className="home-text23">
            Werden meine Daten vertraulich behandelt?
          </h2>
          <span className="home-text24">
            Ja. Dies ist im Gesetz so vorgeschrieben (§ 8 HinSchG). Wird Ihre
            Identität oder der Sachverhalt Dritten mitgeteilt, müssen Sie
            hiervon im Vorfeld unterrichtet werden.
          </span>
          <h2 className="home-text25">Muss ich meine Identität preisgeben?</h2>
          <span className="home-text26">
            Nein. Auch anonyme Meldungen werden bearbeitet. Es ist gleichwohl
            ratsam, Ihre Identität mitzuteilen, da dies die Aufklärung des
            Sachverhaltes erleichtert.
          </span>
          <h2 className="home-text27">
            Gibt es auch andere Stellen, wo ich Missstände melden kann?
          </h2>
          <span className="home-text28">
            Sie haben die Möglichkeit, sich auch an eine externe Meldestelle zu
            wenden. Sie können ferner die Öffentlichkeit anrufen, wenn die
            Meldung bei der Meldestelle fruchtlos bleibt.
          </span>
          <h2 className="home-text29">
            Welche Ansprüche habe ich im Falle von Repressalien?
          </h2>
          <span className="home-text30">
            Erleiden Sie aufgrund Ihrer Meldung wie auch immer geartete
            Nachteile, stehen Ihnen Schadensersatzansprüche zu.
          </span>
          <h2 className="home-text31">
            Was passiert, wenn sich meine Meldung als falsch herausstellt?
          </h2>
          <span className="home-text32">
            Es ist freilich wichtig, dass Sie Meldungen nur im Falle konkreter
            Verdachtsmomente einreichen. Jedoch müssen Hinweisgeber nur im Falle
            grober Fahrlässigkeit sowie Vorsatzes Schadensersatz leisten.
          </span>
          <h2 className="home-text33">
            Bis wann wird muss meine Meldung bearbeitet werden?
          </h2>
          <span className="home-text34">
            Der Eingang Ihrer Meldung wird spätestens nach 7 Tagen bestätigt.
            Deren Prüfung muss binnen 3 Monaten abgeschlossen sein.
          </span>
        </div>
      </div>
      <div className="home-container10">
        <div className="home-container11">
          <div className="home-container12">
            <img
              alt="image"
              src="/playground_assets/integrityor.svg"
              className="home-image3"
            />
            <span className="home-text35">
              <span>
                Intergrityportal bietet Unternehmen und staatlichen Stellen ein
                einfaches System für 
              </span>
              <span>Rechtskonformität &amp; Compliance</span>
            </span>
          </div>
          <div className="home-container13"></div>
          <div className="home-container14"></div>
          <div className="home-container15"></div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script src="https://static.heyflow.app/widget/latest/iframe.js"></script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
