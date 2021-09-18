import Component from '@glimmer/component';

export default class LoginComponent extends Component {
  user_name = '';
  password = '';

  async validate_user() => {
    var user_data = {
      user_name: this.user_name,
      password: this.password,
    };
    console.log(user_data);
    await fetch('servlet/authenticate', {
      method: 'POST',
      body: JSON.stringify(user_data),
    });
  }
}
