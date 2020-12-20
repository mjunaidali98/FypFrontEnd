import React, { Component } from 'react'

export default class reset extends Component {
    render() {
        return (
            <div class="row">
            <div class="col-md-12">
                <form action="/reset/<%= token %>" method="POST">
                  <legend>Reset Password</legend>
                  <div class="form-group">
                    <label for="password">New Password</label>
                    <input type="password" name="password" value="" placeholder="New password" autofocus="autofocus" class="form-control"/>
                  </div>
                  <div class="form-group">
                    <label for="confirm">Confirm Password</label>
                    <input type="password" name="confirm" value="" placeholder="Confirm password" class="form-control"/>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">Update Password</button>
                  </div>
                </form>
            </div>
        </div>
        )
    }
}
