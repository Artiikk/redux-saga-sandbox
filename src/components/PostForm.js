import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const { title } = this.state

    if (!title.trim()) {
      return this.props.showAlert('Cannot be blank!')
    }

    const newPost = {
      title, id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({ title: '' })
  }

  changeInputhandler = ({ target }) => {
    this.setState(prev => ({
      [target.name]: target.value
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>

        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="form-text">Post name</label>
          <input 
            id="form-text" 
            type="text" 
            className="form-control"
            value={this.state.title}
            name="title"
            onChange={this.changeInputhandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert
}

const mapStateToProps = (state) => {
  return {
    alert: state.app.alert
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)