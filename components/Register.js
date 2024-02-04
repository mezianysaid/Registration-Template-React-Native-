import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button, Card, TextInput, HelperText} from 'react-native-paper';
import sig1 from './assets/sig2.jpg';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const Regester = () => {
  const [text, setText] = useState('');
  const formFields = {username: '', email: '', password: '', confirmPass: ''};
  const [form, setForm] = useState(formFields);
  const [Errors, setErrors] = useState({});

  const cancelForm = () => {
    setForm(formFields);
  };
  const handleSubmit = e => {
    e.preventDefault();
    try {
      Validate();
    } catch (error) {
      console.log(error);
    }
  };
  const Validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (form.username === undefined) {
      setErrors({...Errors, username: 'username is required'});
      return false;
    } else if (form.username.length < 3) {
      setErrors({...Errors, username: 'username is too short'});
      return false;
    }
    if (form.email === undefined) {
      setErrors({...Errors, email: 'email is required'});
      return false;
    } else if (form.email.length < 3) {
      setErrors({...Errors, email: 'email is too short'});
      return false;
    } else if (!regex.test(form.email)) {
      setErrors({...Errors, email: 'This email is invalid, try again !!'});
      return false;
    }
    if (form.password == null) {
      setErrors({...Errors, password: 'password is required'});
      return false;
    } else if (form.password.length < 4) {
      setErrors({
        ...Errors,
        password: 'password is too short, must be atleast 4 caracters',
      });
      return false;
    }
    if (form.confirmPass === undefined) {
      setErrors({...Errors, confirmPass: 'confirm password is required'});
      return false;
    } else if (form.confirmPass.length < 4) {
      setErrors({...Errors, confirmPass: 'confirm password is too short'});
      return false;
    }
    if (form.password != form.confirmPass) {
      setErrors({...Errors, confirmPass: 'The Passwords Does Not Match'});
      return false;
    }
    return true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>SIGN UP</Text>
      </View>
      <View style={styles.contenetWrapper}>
        <Card style={{backgroundColor: '#0099ff'}}>
          <View style={styles.image}>
            <Card.Cover source={sig1} theme={{roundness: 30}} />
          </View>
          <View style={styles.wrapper}>
            <Card.Content style={styles.fields}>
              <TextInput
                mode="outlined"
                label="Username"
                name="username"
                placeholder="type your username here ..."
                outlineColor="#0099ff"
                right={<TextInput.Icon icon="text" />}
                style={styles.textInput}
                theme={{roundness: 30}}
                value={form.username}
                onChangeText={text => setForm({...form, username: text})}
              />
              {form.username && 'username' in Errors ? (
                <HelperText type="error">{Errors['username']}</HelperText>
              ) : null}

              <TextInput
                mode="outlined"
                label="Email"
                name="email"
                placeholder="type youremail@gmail.com"
                outlineColor="#0099ff"
                right={<TextInput.Icon icon="email" />}
                style={styles.textInput}
                theme={{roundness: 30}}
                type="email"
                value={form.email}
                onChangeText={text => setForm({...form, email: text})}
              />
              {form.email && 'email' in Errors ? (
                <HelperText type="error">{Errors['email']}</HelperText>
              ) : null}
              <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Password"
                name="password"
                placeholder="*********"
                outlineColor="#0099ff"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                theme={{roundness: 30}}
                value={form.password}
                onChangeText={text => setForm({...form, password: text})}
              />
              {form.password && 'password' in Errors ? (
                <HelperText type="error">{Errors['password']}</HelperText>
              ) : null}
              <View style={styles.viewField}>
                <TextInput
                  style={styles.textInput}
                  mode="outlined"
                  name="confirmPass"
                  label="Confirm Password"
                  placeholder="*********"
                  outlineColor="#0099ff"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                  theme={{roundness: 30}}
                  value={form.confirmPass}
                  onChangeText={text => setForm({...form, confirmPass: text})}
                />
                {form.confirmPass && 'confirmPass' in Errors ? (
                  <HelperText type="error">{Errors['confirmPass']}</HelperText>
                ) : null}
              </View>
            </Card.Content>
            <View style={styles.SocialView}>
              <TouchableOpacity>
                <Avatar.Icon
                  size={50}
                  icon="google"
                  style={{backgroundColor: '#0099ff', elevation: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Avatar.Icon
                  size={50}
                  icon="facebook"
                  style={{
                    backgroundColor: '#0099ff',
                    marginLeft: 10,
                    elevation: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Avatar.Icon
                  size={50}
                  icon="github"
                  style={{
                    backgroundColor: '#0099ff',
                    marginLeft: 10,
                    elevation: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Card.Actions style={{marginTop: 20}}>
              <TouchableOpacity onPress={cancelForm}>
                <Button
                  outlineColor="#0099ff"
                  mode="outlined"
                  textColor="#0099ff">
                  Cancel
                </Button>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit}>
                <Button buttonColor="#0099ff">
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 16,
                      letterSpacing: 3,
                      color: 'white',
                    }}>
                    Register
                  </Text>
                </Button>
              </TouchableOpacity>
            </Card.Actions>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default Regester;

const styles = StyleSheet.create({
  container: {
    // background:URL('')
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 35,
    color: '#0099ff',
    letterSpacing: 5,
    shadowColor: 'black',
  },
  contenetWrapper: {
    marginHorizontal: 10,
  },
  fields: {
    marginTop: 10,
  },
  textInput: {
    marginTop: 8,
    elevation: 10,
    borderRadius: 30,
  },
  image: {
    width: 190,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
  },
  wrapper: {
    backgroundColor: 'white',
    borderTopStartRadius: 70,
    marginTop: 10,
    paddingBottom: 2,
    marginBottom: 7,
  },
  SocialView: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
