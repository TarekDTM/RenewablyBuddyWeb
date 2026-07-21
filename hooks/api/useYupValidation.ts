import { useCallback } from 'react'
import * as yup from 'yup'

export const useYupValidationResolver = (validationSchema: yup.AnyObject) =>
  useCallback(
    async (data: unknown) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors : any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: yup.ValidationError[], currentError: yup.ValidationError) => ({
              ...allErrors,
              [currentError.path as string]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        }
      }
    },
    [validationSchema]
  )