/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React, { useState } from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import ZIonPage from "@/components/ZIonPage";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import CONSTANTS, { PRODUCT_NAME } from "@/utils/constants";
import Header from "@/components/Header";
import {
  ZIonAccordion,
  ZIonAccordionGroup,
  ZIonButton,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonIcon,
  ZIonImg,
  ZIonInput,
  ZIonItem,
  ZIonLabel,
  ZIonRow,
  ZIonSelect,
  ZIonSelectOption,
  ZIonText,
  ZIonTitle,
} from "@/components/ZIonComponents";
import ZAppSideMenu from "@/navigation/AppSideMenu";
import { Formik } from "formik";
import { copyOutline } from "ionicons/icons";
import { loremIpsum } from "@/LoremIpsum";
import ZaionsRSelect from "@/components/CustomComponents/ZaionsRSelect";
import { ZaionsRSelectOptions } from "@/types/components/CustomComponents/index.type";
import { SingleValue } from "react-select";
import { EmptyBox } from "@/assets/images";
import { useZIonToast } from "@/ZaionsHooks/zionic-hooks";
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";
import classNames from "classnames";
import Footer from "@/components/Footer";

/**
 * Type Imports go down
 * ? Like import of type or type of some recoil state or any external type import is a Type import
 * */

/**
 * Recoil State Imports go down
 * ? Import of recoil states is a Recoil State import
 * */

/**
 * Style files Imports go down
 * ? Import of style sheet is a style import
 * */

/**
 * Images Imports go down
 * ? Import of images like png,jpg,jpeg,gif,svg etc. is a Images Imports import
 * */

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

enum ZUnits {
  paragraphs = "paragraphs",
  sentences = "sentences",
  words = "words",
}

const ZUnitOptions = [
  { value: ZUnits.paragraphs, label: "Paragraph" },
  { value: ZUnits.sentences, label: "Sentences" },
  { value: ZUnits.words, label: "Words" },
];

const ZLPGenerator: React.FC = () => {
  const [compState, setCompState] = useState<{
    unit: ZUnits;
    count: number;
  }>({
    unit: ZUnits.paragraphs,
    count: 1,
  });

  const { isLgScale } = useZMediaQueryScale();

  const { presentZIonToast } = useZIonToast();

  const generatedData = loremIpsum({
    count: compState.count, // Number of "words", "sentences", or "paragraphs"
    format: "plain", // "plain" or "html"
    paragraphLowerBound: 3, // Min. number of sentences per paragraph.
    paragraphUpperBound: 7, // Max. number of sentences per paragraph.
    random: Math.random, // A PRNG function
    sentenceLowerBound: 5, // Min. number of words per sentence.
    sentenceUpperBound: 15, // Max. number of words per sentence.
    suffix: "\n", // Line ending, defaults to "\n" or "\r\n" (win32)
    units: compState.unit, // Array of words to draw from
  });

  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.LOREM_IPSUM_GENERATOR_PAGE_ID} />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - Lorem ipsum generator`}
        id={CONSTANTS.PAGE_IDS.LOREM_IPSUM_GENERATOR_PAGE_ID}
      >
        {/* Header  */}
        <Header title="Lorem Ipsum Generator" />

        {/* Content */}
        <ZIonContent color="light">
          <ZIonGrid className="lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5">
            <Formik
              initialValues={{
                count: compState?.count ?? 1,
                unit: compState?.unit ?? ZUnits.paragraphs,
              }}
              enableReinitialize={true}
              onSubmit={(value) => {
                setCompState((oldValues) => ({
                  ...oldValues,
                  count: value.count,
                  unit: value.unit,
                }));
              }}
            >
              {({
                values,
                setFieldValue,
                handleChange,
                handleBlur,
                submitForm,
              }) => {
                return (
                  <ZIonRow>
                    <ZIonCol
                      className={classNames({
                        "p-3 rounded-lg shadow-md ion-align-items-center zaions__bg_white":
                          true,
                        flex: !isLgScale,
                      })}
                      size="12"
                    >
                      <div
                        className={classNames({
                          "flex gap-2 ion-align-items-center": true,
                          "w-1/2": !isLgScale,
                          "w-full": isLgScale,
                        })}
                      >
                        <ZIonInput
                          minHeight="2.5rem"
                          type="number"
                          min={1}
                          name="count"
                          value={values.count}
                          onIonChange={handleChange}
                          onIonBlur={handleBlur}
                          className={classNames({
                            "w-20": !isLgScale,
                            "w-[6rem]": isLgScale,
                          })}
                        />
                        <ZaionsRSelect
                          options={ZUnitOptions}
                          onBlur={handleBlur}
                          onChange={(el) => {
                            const value = (
                              el as SingleValue<ZaionsRSelectOptions>
                            )?.value;
                            setFieldValue("unit", value, false);
                          }}
                          value={
                            ZUnitOptions?.filter(
                              (el) => el.value === values.unit
                            )[0]
                          }
                        />

                        <ZIonButton onClick={submitForm}>Generator</ZIonButton>
                      </div>
                      <div
                        className={classNames({
                          "w-1/2 flex ion-align-items-center ion-text-end ion-justify-content-end":
                            !isLgScale,
                          "w-full mt-2": isLgScale,
                        })}
                      >
                        <ZIonButton
                          color="tertiary"
                          onClick={() => {
                            void navigator.clipboard.writeText(generatedData);

                            void presentZIonToast("✨ Copied", "tertiary");
                          }}
                        >
                          <ZIonIcon icon={copyOutline} className="me-1" /> copy
                        </ZIonButton>
                      </div>
                    </ZIonCol>

                    <ZIonCol
                      size="12"
                      className="p-3 mt-3 rounded-lg shadow-md ion-align-items-center zaions__bg_white"
                    >
                      <div className="">
                        {generatedData.trim().length > 0 ? (
                          generatedData.split("\n")?.length > 0 ? (
                            generatedData.split("\n").map((el, index) => (
                              <ZIonText className="block mb-4" key={index}>
                                {el}
                              </ZIonText>
                            ))
                          ) : (
                            generatedData
                          )
                        ) : (
                          <div className="flex flex-col w-full ion-align-items-center ion-justify-content-center">
                            <ZIonImg
                              src={EmptyBox}
                              className="w-[19rem] h-[14rem]"
                            />

                            <ZIonText color="medium" className="text-xl">
                              No text found.
                            </ZIonText>
                          </div>
                        )}
                      </div>
                    </ZIonCol>
                  </ZIonRow>
                );
              }}
            </Formik>
            <ZIonRow>
              {/* About */}
              <ZIonCol className="p-2 mt-5" size="12">
                <ZIonTitle className="font-semibold tracking-widest ion-no-padding">
                  About
                </ZIonTitle>
                <ZIonText className="block mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </ZIonText>
              </ZIonCol>

              {/* FAQ (frequently ask questions) */}
              <ZIonCol className="p-2 mt-5" size="12">
                <ZIonTitle className="mb-3 font-semibold tracking-widest ion-no-padding">
                  FAQ
                </ZIonTitle>

                <ZIonAccordionGroup>
                  <ZIonAccordion value="first">
                    <ZIonItem slot="header" color="light">
                      <ZIonLabel className="">Why do we use it?</ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </ZIonText>
                    </div>
                  </ZIonAccordion>

                  <ZIonAccordion value="second">
                    <ZIonItem slot="header" color="light">
                      <ZIonLabel className="">
                        Where does it come from?
                      </ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                      </ZIonText>

                      <ZIonText className="block mt-2">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </ZIonText>
                    </div>
                  </ZIonAccordion>

                  <ZIonAccordion value="third">
                    <ZIonItem slot="header" color="light">
                      <ZIonLabel className="">Where can I get some?</ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </ZIonText>
                    </div>
                  </ZIonAccordion>
                </ZIonAccordionGroup>
              </ZIonCol>
            </ZIonRow>
          </ZIonGrid>
        </ZIonContent>

        {/* Footers */}
        <Footer />
      </ZIonPage>
    </>
  );
};

export default ZLPGenerator;
