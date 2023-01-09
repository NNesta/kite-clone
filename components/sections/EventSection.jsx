import React from "react";
import Wrapper from "../ui/Wrapper";
import EventCard from "../ui/EventCard";
import { FaCalendarAlt } from "react-icons/fa";

const EventSection = () => {
  return (
    <Wrapper>
      <h1 className="text-5xl font-bold my-4">Events</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 group">
          <img
            src="https://www.kit.edu/admin/events/images/ajax/image.php?ev_id=36883&format=widget"
            alt=""
          />
          <h className="text-5xl font-bold">
            Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken
          </h>
          <h5 className="text-lg font-semibold">2023-01-09 15:45 - 17:15</h5>
          <h5 className="text-xl font-semibold">
            KIT, Campus Süd Geb. 10.81, Engesser-Hörsaal Kaiserstraße 12 76131
            Karlsruhe
          </h5>
          <p>
            Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund
            um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem
            sie gezielt kulturelle Potenziale aktivieren. Sie verbinden
            Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft,
            Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit
            dieser Synthese formulieren sie nicht nur eine Alternative zu
            Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik,
            und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus
            einer Vorstellung von solchen 'kulturellen Netzwerken' entwickelt
            der Vortrag einen wissenschaftlichen Zugang zu diesem bislang
            unbeachteten Phänomen und zieht daraus brisante Schlüsse.
            Gasthörende können sich per E-Mail an christine.mielke(at)kit.edu
            anmelden. Studierende nutzen bitte den Anmeldekalender. Bild:
            artforum/Nicolas Wefers
          </p>
          <span class="material-symbols-outlined group-hover:translate-4 duration-300 ease-in-out">
            arrow_forward
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="self-end -mt-20 flex gap-3 text-xl text-[#00876C]">
            <h5 className=" ">TO EVENT CALENDAR</h5>
            <FaCalendarAlt />
          </div>
          <div>
            {[
              {
                date: "2021/01/09",
                title:
                  "Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken",
                description:
                  "Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem sie gezielt kulturelle Potenziale aktivieren. Sie verbinden Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft, Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit dieser Synthese formulieren sie nicht nur eine Alternative zu Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik, und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus",
              },
              {
                date: "2021/01/09",
                title:
                  "Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken",
                description:
                  "Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem sie gezielt kulturelle Potenziale aktivieren. Sie verbinden Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft, Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit dieser Synthese formulieren sie nicht nur eine Alternative zu Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik, und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus",
              },
              {
                date: "2021/01/09",
                title:
                  "Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken",
                description:
                  "Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem sie gezielt kulturelle Potenziale aktivieren. Sie verbinden Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft, Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit dieser Synthese formulieren sie nicht nur eine Alternative zu Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik, und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus",
              },
              {
                date: "2021/01/09",
                title:
                  "Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken",
                description:
                  "Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem sie gezielt kulturelle Potenziale aktivieren. Sie verbinden Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft, Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit dieser Synthese formulieren sie nicht nur eine Alternative zu Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik, und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus",
              },
              {
                date: "2021/01/09",
                title:
                  "Ringvorlesung: Was kann Kultur? Neue Hoffnung in neuen Netzwerken",
                description:
                  "Ringvorlesung Einführung in die Angewandte Kulturwissenschaft Rund um den Globus entstehen Netzwerke, die auf Krisen reagieren, indem sie gezielt kulturelle Potenziale aktivieren. Sie verbinden Kreativität mit Themen wie Bildung, Emanzipation, Wissenschaft, Natur- und Kulturschutz, Handwerk, Tourismus und weiteren. Mit dieser Synthese formulieren sie nicht nur eine Alternative zu Politik und Kulturbetrieb, sondern auch eine fundamentale Kritik, und reaktivieren hierfür ein elementares Verständnis von Kultur. Aus",
              },
            ].map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default EventSection;
