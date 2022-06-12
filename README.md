# outlive
Max/MSP performance patch for "Outlive everything you know"

Download the "Outlive everything you know" folder and run the enclosed patch. Leave all files in the folder.

Requirements:
- "Grainflow" package by Christopher Poovey 
      - (File → Show Package Manager)
- Max 8 or later

Performance setup:
- Connect a MIDI keyboard (min. 25 keys) to the performance computer and select the keyboard from the list of MIDI devices. If desired, adjust the velocity response (default: cubic).

- Connect an audio interface (min. 2 channels) to the performance computer. Note that this must be done before opening Max. Connect the percussionist's tin's contact mic to channel 1 (or select another channel in menu). Connect the percussionist's box's mic to channel 2 (or select another). 

- Click "menu" under the audio output and select the audio interface as the input to the patch.

- Click the "perc off/perc on" button to turn on percussion input. If percussion feeds back, increase the noise gate threshold. If percussion cuts out, reduce the threshold. Each setup has different drive mix settings. If necessary, adjust them and save the patch. At any point, click "drive rst" to reset the mix to factory default. 
