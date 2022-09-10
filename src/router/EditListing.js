import { React, useState } from 'react'
import FormComponent from '../components/reusableComponents/FormComponent'

export default function EditListing() {
    const [isEditing, setIsEditing] = useState(false)
    const editListing = () => {
        setIsEditing(!isEditing)
    }
    return (
        <div>
            <FormComponent editListing={editListing} />
        </div>
    )
}
