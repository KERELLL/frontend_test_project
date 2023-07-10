import React from "react";
import {Field, Form, formValues, InjectedFormProps, reduxForm} from "redux-form";
import {ConnectedProps, useDispatch} from "react-redux";
import {createStream} from "./streams.streamAction";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type StreamCreateFormValuesType = {
    title: string,
    description: string
}
const StreamCreate: React.FC<InjectedFormProps<StreamCreateFormValuesType>> = (props) => {
    const dispatch = useDispatch()
    const renderError = (error: string, touched: boolean) => {
        if (error && touched) {
            return (
                <div className={"ui error message"}>
                    <div className={"header"}>{error}</div>
                </div>
            );
        }
    }

    const renderInput = (props: any) => {
        return (
            <div className={"field"}>
                <label>{props.label}</label>
                <input onChange={props.input.onChange} value={props.input.value} autoComplete={"off"}/>
                <div>{renderError(props.meta.error, props.meta.touched)}</div>
            </div>

        )
    }

    const onSubmit = (formProps: StreamCreateFormValuesType) => {
        dispatch(createStream(formProps.title, formProps.description));
    }

    const {handleSubmit} = props

    return (
        <form className={"ui form error"} onSubmit={handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} label="title"></Field>
            <Field name="description" component={renderInput} label="description"></Field>
            <button className={"ui button primary"}>
                Submit
            </button>
        </form>
    )
}

const validate = (formValues: any) => {
    const errors = {
        title: '',
        description: ''
    };
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors
}

const formWrapped = reduxForm<StreamCreateFormValuesType>({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect()(formWrapped)

