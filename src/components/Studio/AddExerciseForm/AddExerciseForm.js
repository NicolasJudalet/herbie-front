import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import StyledAddExerciseForm from './AddExerciseForm.style';
import TextField from '@material-ui/core/TextField';

class AddExerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseToAdd: {
        id: 0,
        exerciseType: '',
        exerciseName: '',
        exerciseDescription: '',
        totalTime: '',
      },
      currentId: 0,
    }
  }

  handleSelectChange = event => {
    this.setState((prevState) => ({
      exerciseToAdd: {
        ...prevState.exerciseToAdd,
        [event.target.name]: event.target.value,
      }
    }));
  };

  handleTextChange = name => event => {
    this.setState({
      exerciseToAdd: {
        ...this.state.exerciseToAdd,
        [name]: event.target.value,
      }
    });
  };

  resetExercise = () => {
    const previousId = this.state.currentId;
    this.setState({
      exerciseToAdd: {
        id: previousId + 1,
        exerciseType: '',
        exerciseName: '',
        exerciseDescription: '',
        totalTime: '',
      },
      currentId: previousId + 1,
    });
  }

  render() {
    return (
      <StyledAddExerciseForm className='formContainer'>
        <h2 className='formHeader'>Ajouter un exercice</h2>
        <div className='inputContainer'>
          <FormControl fullWidth >
            <InputLabel htmlFor="exerciseType" >Type</InputLabel>
            <Select
              value={this.state.exerciseToAdd.exerciseType}
              onChange={this.handleSelectChange}
              inputProps={{
                name: 'exerciseType',
                id: 'exerciseType',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Rythme'}>Rythme</MenuItem>
              <MenuItem value={'Mélodie'}>Mélodie</MenuItem>
              <MenuItem value={'Voicings'}>Voicings</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id='exerciseName'
            label='Nom'
            fullWidth
            value={this.state.exerciseToAdd.exerciseName}
            onChange={this.handleTextChange('exerciseName')}
            margin='normal'
          />

          <TextField
            id='exerciseDescription'
            label='Description'
            fullWidth
            value={this.state.exerciseToAdd.exerciseDescription}
            onChange={this.handleTextChange('exerciseDescription')}
            margin='normal'
          />

          <TextField
            id="exerciseTime"
            label="Durée (min)"
            fullWidth
            value={this.state.exerciseToAdd.totalTime}
            onChange={this.handleTextChange('totalTime')}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
        </div>

        <Button
          className="outline"
          variant='contained'
          color='primary'
          onClick={() => {
            this.resetExercise();
            this.props.addExercise(this.state.exerciseToAdd);
          }}
          disabled={false}
        >
          Ajouter l'exercice
        </Button>
      </StyledAddExerciseForm>
    );
  }
}

export default AddExerciseForm;
