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
  ZIonAccordion,
  ZIonAccordionGroup,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonInput,
  ZIonItem,
  ZIonLabel,
  ZIonRow,
  ZIonText,
  ZIonTitle,
} from "@/components/ZIonComponents";
import Header from "@/components/Header";
import ZAppSideMenu from "@/navigation/AppSideMenu";
import Footer from "@/components/Footer";

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from "@/ZaionsHooks/ZGenericHooks";

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import { zPercentageCalculateHandler } from "@/utils/helpers";
import { ZCalculateType } from "@/utils/enums";
import CONSTANTS, { PRODUCT_NAME } from "@/utils/constants";

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

const ZPercentageCalculator: React.FC = () => {
  const { isAboveXlScale, isXlScale, isLgScale, isMdScale } =
    useZMediaQueryScale();
  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu pageId={CONSTANTS.PAGE_IDS.PERCENTAGE_CALCULATOR_PAGE_ID} />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - Percentage Calculator`}
        id={CONSTANTS.PAGE_IDS.PERCENTAGE_CALCULATOR_PAGE_ID}
      >
        {/* Header  */}
        <Header title="Percentage Calculator" />

        {/* Content */}
        <ZIonContent color="light">
          <ZIonGrid className="lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5">
            <ZIonRow>
              <ZIonCol
                size="12"
                className={classNames({
                  "flex ion-justify-content-center flex-col": true,
                  "ion-text-center ion-align-items-center": isMdScale,
                })}
              >
                {isMdScale && (
                  <ZIonText
                    className={classNames({
                      "mb-3 ion-no-padding font-semibold": true,
                      "text-2xl": (isXlScale && !isLgScale) || isAboveXlScale,
                      "text-xl": isLgScale,
                    })}
                  >
                    Percentage Calculator
                  </ZIonText>
                )}

                <ZIonText
                  className={classNames({
                    "text-lg block":
                      (isXlScale && !isLgScale) || isAboveXlScale,
                    "text-md": isLgScale && !isMdScale,
                  })}
                >
                  Percentage Calculator is a free online tool to calculate
                  percentages.
                </ZIonText>
              </ZIonCol>

              {/* Percentage of */}
              <ZIonCol
                className="flex flex-col gap-4 mt-2 rounded-lg shadow-md md:flex-row ion-padding zaions__bg_white md:ion-align-items-center md:gap-0 ion-justify-content-between"
                size="12"
              >
                <Formik
                  initialValues={{
                    percentage: 0,
                    number: 0,

                    result: 0,
                  }}
                  onSubmit={() => {}}
                >
                  {({ handleChange, handleBlur, setFieldValue, values }) => {
                    return (
                      <>
                        <div className="flex ion-align-items-center">
                          <ZIonText>What is</ZIonText>
                          <ZIonInput
                            type="number"
                            minHeight="2.3rem"
                            name="percentage"
                            className="w-[10rem] ms-1"
                            onIonChange={(e) => {
                              handleChange(e);
                              const _result = zPercentageCalculateHandler({
                                x: +e?.target?.value!,
                                y: +values?.number,
                                type: ZCalculateType.PercentOf,
                              });

                              setFieldValue("result", _result, false);
                            }}
                            onIonBlur={handleBlur}
                            value={values.percentage}
                          />
                          <ZIonText className="mx-1">% of</ZIonText>
                          <ZIonInput
                            type="number"
                            minHeight="2.3rem"
                            name="number"
                            className="w-[10rem] me-1"
                            onIonChange={(e) => {
                              handleChange(e);
                              const _result = zPercentageCalculateHandler({
                                x: +values?.percentage,
                                y: +e?.target?.value!,
                                type: ZCalculateType.PercentOf,
                              });

                              setFieldValue("result", _result, false);
                            }}
                            onIonBlur={handleBlur}
                            value={values.number}
                          />
                          <ZIonText>?</ZIonText>
                        </div>

                        {/* Result */}
                        <div className="flex ion-align-items-center">
                          <ZIonInput
                            className="md:w-[12rem] sm:w-full me-1"
                            label="Result"
                            labelPlacement="stacked"
                            readonly
                            // disabled
                            minHeight="2.3rem"
                            value={values.result}
                          />
                          <ZIonText>%</ZIonText>
                        </div>
                      </>
                    );
                  }}
                </Formik>
              </ZIonCol>

              {/* What percent of */}
              <ZIonCol
                className="flex flex-col gap-4 mt-5 rounded-lg shadow-md md:flex-row ion-padding zaions__bg_white md:ion-align-items-center md:gap-0 ion-justify-content-between"
                size="12"
              >
                <Formik
                  initialValues={{
                    percentage: 0,
                    number: 0,

                    result: 0,
                  }}
                  onSubmit={() => {}}
                >
                  {({ handleChange, handleBlur, setFieldValue, values }) => {
                    return (
                      <>
                        <div className="flex ion-align-items-center">
                          <ZIonInput
                            className="w-[10rem]"
                            minHeight="2.3rem"
                            onIonBlur={handleBlur}
                            name="percentage"
                            type="number"
                            value={values.percentage}
                            onIonChange={(e) => {
                              handleChange(e);
                              const _result = zPercentageCalculateHandler({
                                x: +e?.target?.value!,
                                y: +values?.number,
                                type: ZCalculateType.WhatPercentOf,
                              });

                              setFieldValue("result", _result, false);
                            }}
                          />
                          <ZIonText className="mx-1">
                            is what percent of
                          </ZIonText>
                          <ZIonInput
                            className="w-[10rem] me-1"
                            minHeight="2.3rem"
                            type="number"
                            name="number"
                            onIonBlur={handleBlur}
                            value={values.number}
                            onIonChange={(e) => {
                              handleChange(e);
                              const _result = zPercentageCalculateHandler({
                                x: +values?.percentage,
                                y: +e?.target?.value!,
                                type: ZCalculateType.WhatPercentOf,
                              });

                              setFieldValue("result", _result, false);
                            }}
                          />
                          <ZIonText>?</ZIonText>
                        </div>

                        <div className="flex ion-align-items-center">
                          <ZIonInput
                            className="md:w-[12rem] sm:w-full me-1"
                            label="Result"
                            labelPlacement="stacked"
                            readonly
                            // disabled
                            minHeight="2.3rem"
                            value={values.result}
                          />
                          <ZIonText>%</ZIonText>
                        </div>
                      </>
                    );
                  }}
                </Formik>
              </ZIonCol>

              {/* Percentage change */}
              <ZIonCol
                size="12"
                className="mt-5 rounded-lg shadow-md ion-padding zaions__bg_white"
              >
                <div className="mb-1">
                  <ZIonText>What is the percentage increase/decrease</ZIonText>
                </div>

                <div className="flex flex-col w-full gap-4 md:flex-row md:ion-align-items-center md:gap-0 ion-justify-content-between">
                  <Formik
                    initialValues={{
                      from: 0,
                      to: 0,

                      result: 0,
                    }}
                    onSubmit={() => {}}
                  >
                    {({ handleChange, handleBlur, setFieldValue, values }) => {
                      return (
                        <>
                          <div className="flex ion-align-items-center">
                            <ZIonText className="mx-1">from</ZIonText>
                            <ZIonInput
                              className="w-[10rem]"
                              minHeight="2.3rem"
                              onIonBlur={handleBlur}
                              name="from"
                              type="number"
                              value={values.from}
                              onIonChange={(e) => {
                                handleChange(e);
                                const _result = zPercentageCalculateHandler({
                                  x: +e?.target?.value!,
                                  y: +values?.to,
                                  type: ZCalculateType.PercentChange,
                                });

                                setFieldValue("result", _result, false);
                              }}
                            />
                            <ZIonText className="mx-1">to</ZIonText>
                            <ZIonInput
                              className="w-[10rem] me-1"
                              minHeight="2.3rem"
                              onIonBlur={handleBlur}
                              name="to"
                              type="number"
                              value={values.to}
                              onIonChange={(e) => {
                                handleChange(e);
                                const _result = zPercentageCalculateHandler({
                                  x: +values?.from,
                                  y: +e?.target?.value!,
                                  type: ZCalculateType.PercentChange,
                                });

                                setFieldValue("result", _result, false);
                              }}
                            />
                            <ZIonText>?</ZIonText>
                          </div>

                          {/* Result */}
                          <div className="flex ion-align-items-center">
                            <ZIonInput
                              className="md:w-[12rem] sm:w-full me-1"
                              label="Result"
                              labelPlacement="stacked"
                              readonly
                              // disabled
                              minHeight="2.3rem"
                              value={values.result}
                            />

                            <ZIonText>%</ZIonText>
                          </div>
                        </>
                      );
                    }}
                  </Formik>
                </div>
              </ZIonCol>

              {/* Tip */}
              <ZIonCol
                className="p-2 mt-5 border rounded-lg zaions__bg_white"
                size="12"
              >
                <div className="ion-text-center">
                  <ZIonText className="text-sm">
                    <strong>Tips</strong>: Use tab to move to the next field.
                    Use shift-tab to move to the previous field.
                  </ZIonText>
                </div>
              </ZIonCol>

              {/* About */}
              <ZIonCol className="p-2 mt-5" size="12">
                <ZIonTitle className="font-semibold tracking-widest ion-no-padding">
                  About
                </ZIonTitle>
                <ZIonText className="block mt-2">
                  Welcome to Zaions' comprehensive percentage calculator,
                  designed to offer quick and accurate percentage calculations
                  for a variety of scenarios. From daily math problems like
                  determining tips and discounts, to more complex applications
                  such as assessing growth metrics and percentage differences,
                  our calculator serves as an indispensable tool for both
                  personal and professional use.
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
                      <ZIonLabel className="">What is a percentage?</ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText>
                        In mathematical terms, a percentage is a dimensionless
                        number or ratio that represents a part of 100. Whether
                        denoted by the "%" symbol, "percent," or "pct,"
                        percentages are a universally recognized way to compare
                        sizes, quantities, or even entire datasets. For
                        instance, 40% can be expressed as 0.4 in decimal or 2/5
                        in fractions.
                      </ZIonText>
                    </div>
                  </ZIonAccordion>

                  <ZIonAccordion value="second">
                    <ZIonItem slot="header" color="light">
                      <ZIonLabel className="">
                        How Are Percentages Calculated?
                      </ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText className="block">
                        Percentages are essentially the product of a ratio and
                        100. For example, if a company has 100 employees, with
                        60 of them being female, the ratio of female employees
                        to total employees is 0.6. Multiplied by 100, it
                        translates to 60%, meaning 60% of the company's
                        workforce is female.
                      </ZIonText>
                      <ZIonText className="block mt-3">
                        Percentage Formulas
                      </ZIonText>

                      <ZIonText className="block mt-3">
                        Basic Percentage Calculation:
                        <ZIonText className="font-semibold ms-1">
                          P * V1 = V2
                        </ZIonText>
                      </ZIonText>
                      <div className="ms-3">
                        <ZIonText className="block">
                          P is the percentage
                        </ZIonText>
                        <ZIonText className="block">
                          V1 is the initial value
                        </ZIonText>
                        <ZIonText className="block">
                          V2 is the resulting value after applying the
                          percentage
                        </ZIonText>
                      </div>

                      <ZIonText className="block mt-3">
                        Percentage Difference:
                        <ZIonText className="font-semibold ms-1">
                          ([V1-V2]/(V1+V2/2)) * 100
                        </ZIonText>
                      </ZIonText>

                      <ZIonText className="block mt-3">
                        Percentage Change:
                        <ZIonText className="font-semibold ms-1">
                          ([V2-V1]/[V1]) * 100
                        </ZIonText>
                      </ZIonText>

                      <ZIonText className="block mt-3">
                        These formulas serve as the backbone of our calculator,
                        allowing for real-time, accurate calculations to assist
                        in your decision-making process.
                      </ZIonText>
                    </div>
                  </ZIonAccordion>

                  <ZIonAccordion value="third">
                    <ZIonItem slot="header" color="light">
                      <ZIonLabel className="">
                        Why Use Our Calculator?
                      </ZIonLabel>
                    </ZIonItem>
                    <div className="ion-padding" slot="content">
                      <ZIonText>
                        Powered by Zaions' trusted technology, our percentage
                        calculator simplifies complex percentage calculations,
                        saving you time and reducing the chance of errors.
                        Whether you're a student, a professional, or just
                        someone trying to figure out the complexities of
                        percentages, our calculator aims to provide you with
                        reliable, quick, and accurate results.
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

export default ZPercentageCalculator;
