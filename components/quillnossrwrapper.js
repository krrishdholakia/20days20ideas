import React from 'react'
import 'react-quill/dist/quill.snow.css';

 class FormHtmlEditor extends React.PureComponent {
  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }

    this.state = {
        text: "",
      }

    this.onChange = this.onChange.bind(this);
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  onChange(value) {
      this.setState({text: value});
  }

  render() {
    const ReactQuill = this.ReactQuill
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <ReactQuill
          onChange={this.props.setValue}
          theme="snow"
          modules = {this.modules}
          formats = {this.formats}
        />
      )
    } else {
      return <textarea />;
    }
  }
}

export default FormHtmlEditor;