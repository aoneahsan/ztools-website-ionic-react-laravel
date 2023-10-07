/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from "react";

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import { Formik } from "formik";
import classNames from "classnames";

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import ZIonPage from "@/components/ZIonPage";
import {
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonRow,
  ZIonText,
  ZIonTextarea,
  ZIonTitle,
} from "@/components/ZIonComponents";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import {
  zCountCharacters,
  zCountCharactersWithoutSpace,
  zCountParagraphs,
  ZCountSentences,
  ZCountSyllables,
  zCountWords,
} from "@/utils/helpers";

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
import Header from "@/components/Header";

/**
 * Component props type go down
 * ? Like if you have a type for props it should be please Down
 * */

/**
 * Functional Component
 * About: (Info of component here...)
 * @type {*}
 * */

const ZWordCounter: React.FC = () => {
  const { isSmScale, isLgScale } = useZMediaQueryScale();
  return (
    <ZIonPage>
      {/* Header  */}
      <Header title="Word Counter" />

      {/* Content */}
      <ZIonContent color="light">
        <ZIonGrid className="lg:w-[90%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[80%] mx-auto my-2 pt-5">
          <ZIonRow>
            <ZIonCol
              size="12"
              className={classNames({
                "ion-text-center": !isLgScale,
              })}
            >
              <ZIonText className="text-lg">
                A simple and free word counter and character counter.
              </ZIonText>
            </ZIonCol>

            <ZIonCol
              className="flex flex-col gap-4 mt-2 md:flex-row md:ion-align-items-center md:gap-0 ion-justify-content-between"
              size="12"
            >
              <Formik initialValues={{ text: "" }} onSubmit={() => {}}>
                {({ values, handleChange, handleBlur }) => {
                  return (
                    <ZIonRow className="w-full gap-2">
                      <ZIonCol
                        className="p-3 rounded-lg shadow-md ion-no-padding zaions__bg_white"
                        sizeXl="7.5"
                        sizeLg="7"
                        sizeMd="12"
                        sizeSm="12"
                        sizeXs="12"
                      >
                        <ZIonTextarea
                          rows={isLgScale ? 6 : 9}
                          name="text"
                          value={values.text}
                          onIonChange={handleChange}
                          onIonBlur={handleBlur}
                          // autoGrow={true}
                          className="p-2 pt-0 border rounded"
                          placeholder="type or paste your text here..."
                        />
                      </ZIonCol>

                      <ZIonCol className="rounded-lg shadow-md ion-no-padding zaions__bg_white">
                        <ZIonRow className="h-full">
                          {/* Total words */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className="flex flex-col px-2 border-b ion-align-items-center ion-justify-content-center border-e"
                          >
                            <ZIonText className="text-2xl font-normal">
                              {zCountWords(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Words
                            </ZIonText>
                          </ZIonCol>

                          {/* Total characters */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className="flex flex-col px-2 border-b ion-align-items-center ion-justify-content-center border-e"
                          >
                            <ZIonText className="text-2xl font-normal">
                              {zCountCharacters(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Characters
                            </ZIonText>
                          </ZIonCol>

                          {/* Total characters without space */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className="flex flex-col px-2 border-b ion-align-items-center ion-justify-content-center ion-text-center"
                          >
                            <ZIonText className="text-2xl font-normal">
                              {zCountCharactersWithoutSpace(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Characters without space
                            </ZIonText>
                          </ZIonCol>

                          {/* Total syllables */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className={classNames({
                              "flex flex-col px-2 ion-align-items-center ion-justify-content-center border-e":
                                true,
                              "border-b": !isSmScale,
                            })}
                          >
                            <ZIonText className="text-2xl font-normal">
                              {ZCountSyllables(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Syllables
                            </ZIonText>
                          </ZIonCol>

                          {/* Total sentence */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className={classNames({
                              "flex flex-col px-2 ion-align-items-center ion-justify-content-center border-e":
                                true,
                              "border-b": !isSmScale,
                            })}
                          >
                            <ZIonText className="text-2xl font-normal">
                              {ZCountSentences(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Sentence
                            </ZIonText>
                          </ZIonCol>

                          {/* Total paragraph */}
                          <ZIonCol
                            sizeXl="4"
                            sizeLg="4"
                            sizeMd="4"
                            sizeSm="4"
                            sizeXs="12"
                            className={classNames({
                              "flex flex-col px-2 ion-align-items-center ion-justify-content-center border-e":
                                true,
                              "border-b": !isSmScale,
                            })}
                          >
                            <ZIonText className="text-2xl font-normal">
                              {zCountParagraphs(values.text) || 0}
                            </ZIonText>
                            <ZIonText className="font-semibold tracking-wide text-md">
                              Paragraph
                            </ZIonText>
                          </ZIonCol>
                        </ZIonRow>
                      </ZIonCol>
                    </ZIonRow>
                  );
                }}
              </Formik>
            </ZIonCol>
          </ZIonRow>

          <ZIonRow>
            {/* About */}
            <ZIonCol
              className="p-2 mt-5"
              sizeXl="10"
              sizeLg="10"
              sizeMd="11"
              sizeSm="12"
              sizeXs="12"
            >
              <ZIonTitle className="text-2xl font-semibold tracking-widest ion-no-padding">
                About
              </ZIonTitle>
              <ZIonTitle className="mt-3 font-semibold tracking-widest text-md ion-no-padding">
                Word count:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Word count is a numerical measurement of the total number of
                words in a given text or document. It provides a quick way to
                gauge the length of a piece of writing and is often used in
                various contexts, including academic papers, articles, reports,
                and creative writing. Word count is valuable for writers,
                editors, and students as it helps ensure that a document meets
                specified length requirements.
              </ZIonText>

              <ZIonTitle className="mt-3 font-semibold tracking-widest ion-no-padding">
                Character Count:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Character count refers to the total number of characters,
                including letters, numbers, punctuation marks, and spaces, in a
                piece of text. It's used to assess the length and complexity of
                a document and can be important in scenarios where space is
                limited, such as social media posts or SMS messages.
              </ZIonText>

              <ZIonTitle className="mt-3 font-semibold tracking-widest ion-no-padding">
                Characters Without Space:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Characters without spaces, also known as non-space characters,
                are the total number of characters in a text excluding spaces.
                This count is useful for understanding the core content of a
                document, especially when spaces are not relevant to the
                analysis. For example, in programming, it can help assess code
                complexity.
              </ZIonText>

              <ZIonTitle className="mt-3 font-semibold tracking-widest ion-no-padding">
                Syllables Count:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Syllable count measures the number of syllables in a given text.
                A syllable is a unit of pronunciation typically consisting of a
                vowel sound and any associated consonant sounds. Syllable count
                is valuable for assessing the readability and pronunciation of
                words and sentences, and it can be essential in fields like
                linguistics and language processing.
              </ZIonText>

              <ZIonTitle className="mt-3 font-semibold tracking-widest ion-no-padding">
                Sentence Count:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Sentence count indicates how many sentences are present in a
                text. It's useful for analyzing the structure of a document,
                such as in linguistic research, as well as for understanding the
                complexity and readability of text. Sentence count can help
                writers and editors ensure that paragraphs and sections are
                well-structured.
              </ZIonText>

              <ZIonTitle className="mt-3 font-semibold tracking-widest ion-no-padding">
                Paragraph Count:
              </ZIonTitle>
              <ZIonText className="block mt-1">
                Paragraph count represents the total number of paragraphs in a
                text or document. It's essential for understanding the
                organization and layout of a document and is often used in
                formatting and style analysis. Writers and editors use paragraph
                count to ensure proper document structure and readability.
              </ZIonText>
            </ZIonCol>
          </ZIonRow>
        </ZIonGrid>
      </ZIonContent>
    </ZIonPage>
  );
};

export default ZWordCounter;
