import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                            <div className="input-group-prepend">
                               <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book"></i>
                                </div>
                            </div>
                                <input 
                                  type="text" 
                                  className="form-control text-capitalize" 
                                  placeholder="add a to do item"
                                  value={item} 
                                  onChange={handleChange}
                                />
                                <button type="submit" className="btn btn-block btn-primary mt-3">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
