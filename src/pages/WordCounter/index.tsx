/**
 * Core Imports go down
 * ? Like Import of React is a Core Import
 * */
import React from 'react';

/**
 * Packages Imports go down
 * ? Like import of ionic components is a packages import
 * */
import ZIonPage from '@/components/ZIonPage';
import {
	ZIonCol,
	ZIonContent,
	ZIonGrid,
	ZIonHeader,
	ZIonImg,
	ZIonRow,
	ZIonText,
	ZIonTextarea,
	ZIonTitle,
} from '@/components/ZIonComponents';
import { ProductLogo } from '@/assets/images';
import { Formik } from 'formik';
import {
	zCountCharacters,
	zCountCharactersWithoutSpace,
	zCountParagraphs,
	ZCountSentences,
	ZCountSyllables,
	zCountWords,
} from '@/utils/helpers';

/**
 * Custom Imports go down
 * ? Like import of custom components is a custom import
 * */

/**
 * Custom Hooks Imports go down
 * ? Like import of custom Hook is a custom import
 * */

/**
 * Global Constants Imports go down
 * ? Like import of Constant is a global constants import
 * */

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

const ZWordCounter: React.FC = () => {
	return (
		<ZIonPage>
			{/* Header  */}
			<ZIonHeader className='px-2'>
				<div className='flex w-full py-2 ion-align-items-center ion-text-center'>
					<ZIonImg src={ProductLogo} className='w-[2.4rem]' />

					<ZIonTitle className='text-xl font-semibold tracking-widest'>
						Word counter
					</ZIonTitle>
				</div>
			</ZIonHeader>

			{/* Content */}
			<ZIonContent color='light'>
				<ZIonGrid className='lg:w-[90%] md:w-[95%] sm:w-[98%] xs:w-[100%] xl:w-[80%] mx-auto my-2 pt-5'>
					<ZIonRow>
						<ZIonCol size='12'>
							<ZIonText className='text-lg'>
								A simple and free word counter and character counter.
							</ZIonText>
						</ZIonCol>

						<ZIonCol
							className='flex flex-col gap-4 mt-2 md:flex-row md:ion-align-items-center md:gap-0 ion-justify-content-between'
							size='12'
						>
							<Formik initialValues={{ text: '' }} onSubmit={() => {}}>
								{({ values, handleChange, handleBlur }) => {
									return (
										<ZIonRow className='gap-2 w-full'>
											<ZIonCol
												className='ion-no-padding p-3 rounded-lg shadow-md zaions__bg_white'
												size='7.5'
											>
												<ZIonTextarea
													rows={6}
													name='text'
													value={values.text}
													onIonChange={handleChange}
													onIonBlur={handleBlur}
													// autoGrow={true}
													className='border rounded p-2 pt-0'
													placeholder='type or paste your text here...'
												/>
											</ZIonCol>

											<ZIonCol className='ion-no-padding rounded-lg shadow-md zaions__bg_white'>
												<ZIonRow className='md:h-max h-1/2'>
													{/* Total words */}
													<ZIonCol
														sizeXl='4'
														sizeLg='4'
														sizeMd='6'
														sizeSm='12'
														sizeXs='12'
														className='flex ion-align-items-center ion-justify-content-center flex-col border-e'
													>
														<ZIonText className='text-xl font-semibold'>
															{zCountWords(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm font-normal'>
															Words
														</ZIonText>
													</ZIonCol>

													{/* Total characters */}
													<ZIonCol className='flex ion-align-items-center ion-justify-content-center flex-col border-e'>
														<ZIonText className='text-xl font-semibold'>
															{zCountCharacters(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm font-normal'>
															Characters
														</ZIonText>
													</ZIonCol>

													{/* Total characters without space */}
													<ZIonCol className='flex ion-align-items-center ion-justify-content-center flex-col ion-text-center'>
														<ZIonText className='text-xl font-semibold'>
															{zCountCharactersWithoutSpace(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm px-2 font-normal'>
															Characters without space
														</ZIonText>
													</ZIonCol>
												</ZIonRow>

												<ZIonRow className='h-1/2 border-t'>
													{/* Total syllables */}
													<ZIonCol className='flex ion-align-items-center ion-justify-content-center flex-col border-e'>
														<ZIonText className='text-xl font-semibold'>
															{ZCountSyllables(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm font-normal'>
															Syllables
														</ZIonText>
													</ZIonCol>

													{/* Total sentence */}
													<ZIonCol className='flex ion-align-items-center ion-justify-content-center flex-col border-e'>
														<ZIonText className='text-xl font-semibold'>
															{ZCountSentences(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm font-normal'>
															Sentence
														</ZIonText>
													</ZIonCol>

													{/* Total paragraph */}
													<ZIonCol className='flex ion-align-items-center ion-justify-content-center flex-col'>
														<ZIonText className='text-xl font-semibold'>
															{zCountParagraphs(values.text) || 0}
														</ZIonText>
														<ZIonText className='text-sm font-normal'>
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
				</ZIonGrid>
			</ZIonContent>
		</ZIonPage>
	);
};

export default ZWordCounter;
