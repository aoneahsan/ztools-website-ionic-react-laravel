/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from 'react';

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import classNames from 'classnames';
import { calculate } from 'specificity';
import { FieldArray, Formik } from 'formik';
import {
  addCircleOutline,
  addOutline,
  duplicateOutline,
  informationCircleOutline,
  trashBinOutline
} from 'ionicons/icons';

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */
import Header from '@/components/Header';
import {
  ZIonButton,
  ZIonCol,
  ZIonContent,
  ZIonGrid,
  ZIonIcon,
  ZIonInput,
  ZIonRow,
  ZIonText
} from '@/components/ZIonComponents';
import ZIonPage from '@/components/ZIonPage';
import ZRTooltip from '@/components/CustomComponents/ZRTooltip';
import ZAppSideMenu from '@/navigation/AppSideMenu';
import Footer from '@/components/Footer';

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */
import { useZMediaQueryScale } from '@/ZaionsHooks/ZGenericHooks';

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */
import { getRandomKey } from '@/utils/helpers';
import { reportCustomError } from '@/utils/customErrorType';
import CONSTANTS, { PRODUCT_NAME } from '@/utils/constants';

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

const ZCssSpecificityCalculator: React.FC = () => {
  const { isAboveXlScale, isXlScale, isLgScale, isMdScale, isSmScale } =
    useZMediaQueryScale();
  return (
    <>
      {/* Side menu */}
      <ZAppSideMenu
        pageId={CONSTANTS.PAGE_IDS.CSS_SPECIFICITY_CALCULATOR_PAGE_ID}
      />

      <ZIonPage
        pageTitle={`${PRODUCT_NAME} - CSS Specificity Calculator`}
        id={CONSTANTS.PAGE_IDS.CSS_SPECIFICITY_CALCULATOR_PAGE_ID}>
        {/* Header  */}
        <Header title='CSS Specificity Calculator' />

        {/* Content */}
        <ZIonContent color='light'>
          <ZIonGrid className='lg:w-[80%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[60%] mx-auto my-2 pt-5'>
            <Formik
              initialValues={{
                items: [
                  {
                    id: 1,
                    value: 'nav > a:hover::before',
                    result: {
                      A: '0',
                      B: '1',
                      C: '3'
                    }
                  }
                ]
              }}
              onSubmit={() => {}}>
              {({ values, setFieldValue, handleChange }) => {
                return (
                  <>
                    <FieldArray name='items'>
                      {({ remove, push }) => {
                        return (
                          <>
                            <ZIonRow>
                              <ZIonCol
                                sizeXl='7'
                                sizeLg='7'
                                sizeMd='7'
                                sizeSm='12'
                                sizeXs='12'
                                className={classNames({
                                  'flex ion-justify-content-center flex-col':
                                    true,
                                  'ion-text-center ion-align-items-center':
                                    isMdScale
                                })}>
                                {isMdScale && (
                                  <ZIonText
                                    className={classNames({
                                      'mb-3 ion-no-padding font-semibold': true,
                                      'text-2xl':
                                        (isXlScale && !isLgScale) ||
                                        isAboveXlScale,
                                      'text-xl': isLgScale
                                    })}>
                                    CSS Specificity Calculator
                                  </ZIonText>
                                )}

                                <ZIonText
                                  className={classNames({
                                    'text-lg block':
                                      (isXlScale && !isLgScale) ||
                                      isAboveXlScale,
                                    'text-md': isLgScale && !isMdScale
                                  })}>
                                  CSS Specificity Calculator is a free online
                                  tool to calculate CSS Specificity.
                                </ZIonText>
                              </ZIonCol>
                              <ZIonCol
                                className={classNames({
                                  'ion-text-end': !isMdScale
                                })}>
                                {/* <ZIonButton
                                className={classNames({
                                  "ion-no-margin": true,
                                  "me-2": isMdScale,
                                  "mt-2": !isMdScale,
                                })}
                                expand={!isMdScale ? "block" : undefined}
                                onClick={() => {
                                  const _values = Array.from(
                                    values?.items,
                                    ({ value }) => value
                                  );

                                  if (_values) {
                                    const _sorted = _values
                                      .map(calculate)
                                      .sort(compareDesc);

                                    console.log({ _sorted });
                                  }
                                }}
                              >
                                <ZIonIcon icon={listOutline} className="me-1" />
                                Sort by specificity
                              </ZIonButton> */}
                                <ZIonButton
                                  color='tertiary'
                                  expand={isMdScale ? 'block' : undefined}
                                  id='css-specificity-calculator-warning'
                                  className={classNames({
                                    'ion-no-margin ion-no-padding ion-padding-horizontal px-0':
                                      true,
                                    'mt-2': isMdScale
                                  })}>
                                  <ZIonIcon
                                    color='light'
                                    icon={informationCircleOutline}
                                    className='w-7 h-7 me-1'
                                  />
                                  Info
                                </ZIonButton>
                                <ZRTooltip
                                  anchorSelect='#css-specificity-calculator-warning'
                                  className='z-50 border shadow-lg opacity-100 ion-text-start'
                                  variant='light'>
                                  <div
                                    className={classNames({
                                      'w-[40rem]': !isMdScale,
                                      'w-[20rem]': isMdScale,
                                      'w-[8rem]': isSmScale
                                    })}>
                                    <p className='pt-2 tracking-wider text-black first-letter:text-2xl text-md'>
                                      We want to inform you that “Combinator
                                      Selectors” are currently not included in
                                      the final “Weight Count.” This feature is
                                      on our roadmap and will be integrated in
                                      an upcoming update.
                                    </p>
                                    <p className='pt-2 tracking-wider text-black first-letter:text-2xl text-md'>
                                      Our development team is focused on
                                      introducing new functionalities to enhance
                                      your experience with {PRODUCT_NAME}.
                                      Therefore, we kindly request your patience
                                      as we work diligently to implement this
                                      and other features.
                                    </p>
                                    <p className='pt-2 first-letter:text-2xl'>
                                      We value your patronage and hope you have
                                      found our suite of tools beneficial.
                                      Suppose you have any specific tool
                                      requests or feature suggestions or
                                      encounter any issues.
                                    </p>
                                    <p className='py-2 tracking-wider text-black first-letter:text-2xl text-md'>
                                      we encourage you to utilize our feedback
                                      system, accessible via the button at the
                                      bottom-right corner of our platform.
                                      Additionally, the feedback feature is the
                                      ideal channel for such contributions if
                                      you would like to express gratitude or
                                      share your testimonials. Thank you once
                                      again for your understanding and support.
                                      Wishing you an excellent day ahead.
                                    </p>
                                  </div>
                                </ZRTooltip>

                                <ZIonButton
                                  className={classNames({
                                    'ion-no-margin': true,
                                    'mt-2': isMdScale,
                                    'ms-2': !isMdScale
                                  })}
                                  expand={isMdScale ? 'block' : undefined}
                                  onClick={() => {
                                    push({
                                      id: getRandomKey(),
                                      value: '',
                                      result: {
                                        A: '0',
                                        B: '0',
                                        C: '0'
                                      }
                                    });
                                  }}>
                                  <ZIonIcon
                                    icon={addOutline}
                                    className='me-1'
                                  />
                                  Add new Item
                                </ZIonButton>
                              </ZIonCol>
                            </ZIonRow>

                            {values?.items?.length === 0 && (
                              <ZIonRow>
                                <ZIonCol
                                  className='flex flex-col mt-3 rounded-lg shadow-md cursor-pointer ion-align-items-center ion-justify-content-center ion-padding zaions__bg_white'
                                  onClick={() => {
                                    push({
                                      id: getRandomKey(),
                                      value: '',
                                      result: {
                                        A: '0',
                                        B: '0',
                                        C: '0'
                                      }
                                    });
                                  }}>
                                  <ZIonIcon
                                    icon={addCircleOutline}
                                    className='w-10 h-10'
                                    color='primary'
                                  />
                                  <ZIonText className='block mt-2'>
                                    Add a new Item
                                  </ZIonText>
                                </ZIonCol>
                              </ZIonRow>
                            )}

                            {values?.items?.map((el, _index) => {
                              return (
                                <ZIonRow
                                  key={_index}
                                  className='mt-3 transition-all z-csc-item hover:shadow-lg'>
                                  <ZIonCol
                                    className='flex flex-col gap-4 mt-2 rounded-lg shadow-md ion-padding zaions__bg_white md:ion-align-items-center md:gap-0 ion-justify-content-between'
                                    size='12'>
                                    {/* Input */}
                                    <div className='w-full'>
                                      <ZIonInput
                                        name={`items.${_index}.value`}
                                        minHeight={
                                          isLgScale ? '40px' : undefined
                                        }
                                        aria-label='check input'
                                        value={values.items[_index].value}
                                        onIonChange={e => {
                                          try {
                                            handleChange(e);

                                            if (
                                              !isNaN(
                                                parseFloat(
                                                  e.target?.value!.toString()
                                                )
                                              ) ||
                                              e.target
                                                ?.value!.toString()
                                                ?.trim()?.length === 0
                                            ) {
                                              setFieldValue(
                                                `items.${_index}.result`,
                                                {
                                                  A: '0',
                                                  B: '0',
                                                  C: '0'
                                                },
                                                false
                                              );
                                            } else {
                                              const _calculatedValue =
                                                calculate(
                                                  String(e?.target?.value)
                                                );

                                              if (_calculatedValue) {
                                                setFieldValue(
                                                  `items.${_index}.result`,
                                                  _calculatedValue,
                                                  false
                                                );
                                              } else {
                                                setFieldValue(
                                                  `items.${_index}.result`,
                                                  {
                                                    A: '0',
                                                    B: '0',
                                                    C: '0'
                                                  },
                                                  false
                                                );
                                              }
                                            }
                                          } catch (error) {
                                            reportCustomError(error);
                                          }
                                        }}
                                      />
                                    </div>

                                    <ZIonRow>
                                      <ZIonCol
                                        size='12'
                                        className={classNames({
                                          'flex flex-wrap ion-justify-content-between':
                                            !isMdScale
                                        })}>
                                        {/* ID's */}
                                        <div className='flex w-auto mt-3 me-3 ion-align-items-center'>
                                          <div className='flex w-10 h-10 rounded-full zaions__primary_bg ion-align-items-center ion-justify-content-center'>
                                            <ZIonText
                                              className='text-xl'
                                              color='light'>
                                              {values.items[_index]?.result
                                                ?.A || 0}
                                            </ZIonText>
                                          </div>
                                          <ZIonText
                                            className={classNames({
                                              'ms-3': true,
                                              'text-xl': isAboveXlScale,
                                              'text-lg':
                                                !isAboveXlScale &&
                                                isXlScale &&
                                                !isLgScale,
                                              'text-md': isLgScale && !isMdScale
                                              // "text-sm": !isMdScale && isSmScale,
                                            })}>
                                            ID's
                                          </ZIonText>
                                        </div>

                                        {/* Classes, attributes and pseudo-classes */}
                                        <div className='flex w-auto mt-3 me-3 ion-align-items-center'>
                                          <div className='flex w-10 h-10 rounded-full zaions__secondary_bg ion-align-items-center ion-justify-content-center'>
                                            <ZIonText
                                              className='text-xl'
                                              color='light'>
                                              {values.items[_index]?.result
                                                ?.B || 0}
                                            </ZIonText>
                                          </div>
                                          <ZIonText
                                            className={classNames({
                                              'ms-3': true,
                                              'text-xl': isAboveXlScale,
                                              'text-lg':
                                                !isAboveXlScale &&
                                                isXlScale &&
                                                !isLgScale,
                                              'text-md': isLgScale && !isMdScale
                                              // "text-sm": !isMdScale && isSmScale,
                                            })}>
                                            Classes, attributes and
                                            pseudo-classes
                                          </ZIonText>
                                        </div>

                                        {/* Elements and pseudo-elements */}
                                        <div className='flex w-auto mt-3 me-3 ion-align-items-center'>
                                          <div className='flex w-10 h-10 rounded-full zaions__tertiary_bg ion-align-items-center ion-justify-content-center'>
                                            <ZIonText
                                              className='text-xl'
                                              color='light'>
                                              {values.items[_index]?.result
                                                ?.C || 0}
                                            </ZIonText>
                                          </div>
                                          <ZIonText
                                            className={classNames({
                                              'ms-3': true,
                                              'text-xl': isAboveXlScale,
                                              'text-lg':
                                                !isAboveXlScale &&
                                                isXlScale &&
                                                !isLgScale,
                                              'text-md': isLgScale && !isMdScale
                                              // "text-sm": !isMdScale && isSmScale,
                                            })}>
                                            Elements and pseudo-elements
                                          </ZIonText>
                                        </div>
                                      </ZIonCol>

                                      <ZIonCol
                                        className={classNames({
                                          'flex ion-align-items-end ion-justify-content-between':
                                            !isMdScale,
                                          'mt-3': isAboveXlScale,
                                          'mt-2': isXlScale
                                        })}>
                                        {/* Total Specificity Count */}
                                        <div className='flex w-auto mt-3 me-3 ion-align-items-center total-specificity-count-box zaions-transition'>
                                          <div className='flex w-[6rem] h-[3rem] border-4 z-bc-ion-primary rounded-lg ion-align-items-center ion-justify-content-center relative zaions-transition z-rainbow-btn'>
                                            <ZIonText
                                              className='relative z-20 font-sans text-3xl font-semibold '
                                              color='dark'>
                                              {(
                                                (+values.items[_index]?.result
                                                  ?.A || 0) *
                                                  100 +
                                                (+values.items[_index]?.result
                                                  ?.B || 0) *
                                                  10 +
                                                (+values.items[_index]?.result
                                                  ?.C || 0) *
                                                  1
                                              ).toString()}
                                            </ZIonText>
                                          </div>
                                          <ZIonText
                                            className={classNames({
                                              'ms-3': true,
                                              'text-2xl': isAboveXlScale,
                                              'text-lg':
                                                isXlScale && !isLgScale,
                                              'text-md': isLgScale && !isMdScale
                                              // "text-sm": isMdScale && !isSmScale,
                                            })}>
                                            Total Specificity Count
                                          </ZIonText>
                                        </div>

                                        <div className=''>
                                          <ZIonButton
                                            color='danger'
                                            className={classNames({
                                              'ion-no-margin': true,
                                              'me-2': !isMdScale,
                                              'mt-2': isMdScale
                                            })}
                                            expand={
                                              isMdScale ? 'block' : undefined
                                            }
                                            onClick={() => {
                                              setTimeout(() => {
                                                remove(_index);
                                              }, 300);
                                            }}>
                                            <ZIonIcon
                                              icon={trashBinOutline}
                                              className='me-1'
                                            />
                                            <ZIonText className='mt-[2px]'>
                                              Delete
                                            </ZIonText>
                                          </ZIonButton>

                                          <ZIonButton
                                            className={classNames({
                                              'ion-no-margin': true,
                                              'mt-2': isMdScale
                                            })}
                                            expand={
                                              isMdScale ? 'block' : undefined
                                            }
                                            onClick={() => {
                                              push({
                                                id: getRandomKey(),
                                                value:
                                                  values.items[_index].value,
                                                result:
                                                  values.items[_index].result
                                              });
                                            }}>
                                            <ZIonIcon
                                              icon={duplicateOutline}
                                              className='me-1'
                                            />
                                            <ZIonText className='mt-[2px]'>
                                              Duplicate
                                            </ZIonText>
                                          </ZIonButton>
                                        </div>
                                      </ZIonCol>
                                    </ZIonRow>
                                  </ZIonCol>
                                </ZIonRow>
                              );
                            })}
                          </>
                        );
                      }}
                    </FieldArray>
                  </>
                );
              }}
            </Formik>
          </ZIonGrid>
        </ZIonContent>

        {/* Footer */}
        <Footer />
      </ZIonPage>
    </>
  );
};

export default ZCssSpecificityCalculator;
