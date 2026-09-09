/* CircuitPath's complete curriculum. Each record owns its title, topic, code, and language. */
(function () {
  const sections = [
    ['Python foundations', 'PYTHON', [
      'Boot sequence: what code does', 'Meet the Python editor', 'Values: text and numbers', 'Variables: labeled memory', 'Strings: words your robot can use', 'Numbers: speed, distance, and time', 'Print: inspect what your code knows', 'Comments: leave a note for your team', 'User input: let a person choose', 'Predict the output', 'Mini build: name your robot', 'Checkpoint: Python starter badge'
    ]],
    ['Object-oriented Python', 'PYTHON', [
      'Objects: code with personality', 'Classes: the blueprint', 'Attributes: what an object knows', 'The constructor: first setup', 'Methods: what an object can do', 'self: the object in focus', 'Make your first object', 'Object state: change a value', 'Objects working together', 'Mini build: a virtual drive bot'
    ]],
    ['Functions & modules', 'PYTHON', [
      'Why functions save time', 'Define a function', 'Parameters: flexible inputs', 'Return values: send an answer back', 'Local versus global scope', 'Default values', 'Write useful docstrings', 'Modules: organize your code'
    ]],
    ['Logic & iteration', 'PYTHON', [
      'Comparisons: is it close enough?', 'True and False', 'if: make a decision', 'else: choose a backup plan', 'elif: more choices', 'and / or: combine conditions', 'for loops: repeat a job', 'while loops: keep checking', 'range: count with purpose', 'Nested logic challenge'
    ]],
    ['Lists & dictionaries', 'PYTHON', [
      'Lists: a queue of values', 'Indexes: find one item', 'Slices: take a range', 'Add and remove items', 'Loop through a list', 'Dictionaries: labeled data', 'Read and update dictionary values', 'Mini build: pit checklist'
    ]],
    ['Getting ready for FTC', 'FTC JAVA', [
      'What FIRST Tech Challenge code controls', 'Robot safety and motor power', 'Tour the Robot Controller', 'Android Studio setup', 'Hardware configuration mission'
    ]],
    ['OpModes & gamepads', 'FTC JAVA', [
      'What an OpMode is', 'Linear versus iterative OpModes', 'The start and stop lifecycle', 'Map a gamepad button', 'Read joystick axes', 'Build your first TeleOp', 'Driver-control challenge'
    ]],
    ['Controlling mechanisms', 'FTC JAVA', [
      'Map a DC motor', 'Motor direction and signs', 'Power: the 0 to 1 rule', 'Brake and float behavior', 'Map a servo', 'Servo positions and limits', 'Coordinate two mechanisms', 'Mechanism safety challenge'
    ]],
    ['Sensors & feedback', 'FTC JAVA', [
      'Why robots need feedback', 'Encoder counts explained', 'Reset and read encoders', 'Distance sensor basics', 'Color sensor basics', 'IMU orientation', 'Calibrate and test sensors', 'Sensor decision challenge'
    ]],
    ['Autonomous programming', 'FTC JAVA', [
      'Autonomous planning mindset', 'Timers and simple moves', 'Drive by encoder', 'Turn with feedback', 'State machines', 'Build a safe sequence', 'Add a sensor decision', 'Debug an autonomous run', 'Autonomous mission challenge'
    ]],
    ['Road Runner', 'FTC JAVA', [
      'What Road Runner solves', 'Pose: where your robot is', 'Build a trajectory', 'Follow a trajectory', 'Spline paths', 'Markers and mechanism timing', 'Road Runner challenge'
    ]],
    ['Common TeleOp programs', 'FTC JAVA', [
      'Arcade drive', 'Tank drive', 'Field-centric drive', 'Toggle buttons', 'Presets and state', 'TeleOp match challenge'
    ]],
    ['Next steps', 'ROBOTICS', ['Read a real team codebase', 'Your robotics coding plan']]
  ];

  const python = [
    'print("Booting robot program")', 'print("The editor runs one line at a time")', 'speed = 0.6\nprint(speed)', 'robot_name = "Atlas"\nprint(robot_name)', 'team_name = "Circuit Cats"\nprint(team_name)', 'drive_time = 2.5\nprint(drive_time)', 'battery_percent = 88\nprint(battery_percent)', '# This line is a comment\nprint("Comments are ignored by Python")', 'driver_name = "Mason"\nprint(driver_name)', 'left_power = 0.4\nright_power = 0.4\nprint(left_power == right_power)', 'robot_name = "Atlas"\nprint("Hello, " + robot_name)', 'lessons_finished = 12\nprint("Python badge unlocked:", lessons_finished)'
  ];
  const oop = [
    'robot = {"name": "Atlas"}\nprint(robot["name"])', 'class Robot:\n    pass\n\nprint("Blueprint created")', 'class Robot:\n    name = "Atlas"\n\nprint(Robot.name)', 'class Robot:\n    def __init__(self):\n        self.name = "Atlas"\n\nprint("Robot setup complete")', 'class Robot:\n    def speak(self):\n        print("Ready!")\n\nRobot().speak()', 'class Robot:\n    def show_name(self):\n        print(self.name)\n\nprint("self means this robot")', 'class Robot:\n    def __init__(self, name):\n        self.name = name\n\natlas = Robot("Atlas")\nprint(atlas.name)', 'class Robot:\n    def __init__(self):\n        self.power = 0\n\natlas = Robot()\natlas.power = 60\nprint(atlas.power)', 'class Motor:\n    def __init__(self, port):\n        self.port = port\n\nprint(Motor("left").port)', 'class DriveBot:\n    def drive(self):\n        print("Driving forward")\n\nDriveBot().drive()'
  ];
  const funcs = [
    'def announce():\n    print("Robot ready")\n\nannounce()', 'def set_power():\n    print("Power set")\n\nset_power()', 'def set_power(power):\n    print(power)\n\nset_power(0.6)', 'def inches_to_cm(inches):\n    return inches * 2.54\n\nprint(inches_to_cm(12))', 'speed = 0.5\n\ndef show_speed():\n    print(speed)\n\nshow_speed()', 'def drive(power=0.5):\n    print(power)\n\ndrive()', 'def drive(power):\n    """Move the robot at a safe power."""\n    print(power)\n\ndrive(0.4)', 'import math\n\nprint(math.sqrt(81))'
  ];
  const logic = [
    'distance = 12\nprint(distance < 20)', 'is_started = True\nprint(is_started)', 'distance = 12\nif distance < 20:\n    print("Stop")', 'battery = 20\nif battery > 30:\n    print("Go")\nelse:\n    print("Charge")', 'score = 8\nif score > 10:\n    print("Great")\nelif score > 5:\n    print("Keep going")', 'has_block = True\nis_aligned = True\nprint(has_block and is_aligned)', 'for wheel in ["left", "right"]:\n    print(wheel)', 'count = 0\nwhile count < 3:\n    print(count)\n    count += 1', 'for second in range(3):\n    print(second)', 'for side in ["left", "right"]:\n    if side == "left":\n        print("Check left motor")'
  ];
  const lists = [
    'motors = ["left", "right"]\nprint(motors)', 'motors = ["left", "right"]\nprint(motors[0])', 'sensors = ["imu", "color", "distance"]\nprint(sensors[0:2])', 'tasks = ["charge"]\ntasks.append("test motors")\nprint(tasks)', 'for task in ["charge", "test", "pack"]:\n    print(task)', 'robot = {"name": "Atlas", "power": 0.6}\nprint(robot)', 'robot = {"power": 0.6}\nrobot["power"] = 0.7\nprint(robot["power"])', 'pit_checklist = {"battery": "charged", "wheels": "tight"}\nprint(pit_checklist)'
  ];
  const ready = [
    '// FTC code sends instructions to robot hardware\ntelemetry.addData("Status", "Ready");', '// Keep motor power between -1 and 1\nleftDrive.setPower(0.5);', '// Robot Controller runs your OpModes\ntelemetry.addData("Controller", "Online");', '// Android Studio builds and transfers FTC code\ntelemetry.addData("Build", "Success");', 'DcMotor leftDrive = hardwareMap.get(DcMotor.class, "left_drive");\ntelemetry.addData("Motor", "Mapped");'
  ];
  const opmodes = [
    '@TeleOp(name = "My First OpMode")\npublic class FirstOpMode extends LinearOpMode { }', 'public void runOpMode() {\n    waitForStart();\n}', 'waitForStart();\nif (opModeIsActive()) {\n    telemetry.addData("Run", "Active");\n}', 'if (gamepad1.a) {\n    telemetry.addData("Button", "A pressed");\n}', 'double drive = gamepad1.left_stick_y;\ntelemetry.addData("Drive", drive);', 'leftDrive.setPower(gamepad1.left_stick_y);\nrightDrive.setPower(gamepad1.right_stick_y);', 'if (gamepad1.b) {\n    leftDrive.setPower(0);\n    rightDrive.setPower(0);\n}'
  ];
  const mechanisms = [
    'DcMotor arm = hardwareMap.get(DcMotor.class, "arm");\narm.setPower(0.4);', 'leftDrive.setDirection(DcMotor.Direction.REVERSE);\nrightDrive.setDirection(DcMotor.Direction.FORWARD);', 'arm.setPower(0.6);\n// 0.6 is 60% motor power', 'arm.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);', 'Servo claw = hardwareMap.get(Servo.class, "claw");\nclaw.setPosition(0.2);', 'claw.setPosition(0.8);\n// Servo positions stay between 0 and 1', 'arm.setPower(0.3);\nclaw.setPosition(0.8);', 'if (gamepad1.left_bumper) {\n    arm.setPower(0);\n}'
  ];
  const sensors = [
    'telemetry.addData("Why", "Sensors help robots decide");', 'int ticks = leftDrive.getCurrentPosition();\ntelemetry.addData("Ticks", ticks);', 'leftDrive.setMode(DcMotor.RunMode.STOP_AND_RESET_ENCODER);', 'double inches = distanceSensor.getDistance(DistanceUnit.INCH);\ntelemetry.addData("Distance", inches);', 'int red = colorSensor.red();\ntelemetry.addData("Red", red);', 'double heading = imu.getRobotYawPitchRollAngles().getYaw(AngleUnit.DEGREES);', 'imu.resetYaw();\ntelemetry.addData("IMU", "Calibrated");', 'if (distanceSensor.getDistance(DistanceUnit.INCH) < 6) {\n    leftDrive.setPower(0);\n}'
  ];
  const autonomous = [
    '// Autonomous needs a short, safe plan\ntelemetry.addData("Plan", "Drive then turn");', 'leftDrive.setPower(0.4);\nsleep(1000);\nleftDrive.setPower(0);', 'leftDrive.setTargetPosition(500);\nleftDrive.setMode(DcMotor.RunMode.RUN_TO_POSITION);', 'if (heading < 90) {\n    leftDrive.setPower(0.3);\n    rightDrive.setPower(-0.3);\n}', 'int state = 0;\ntelemetry.addData("State", state);', 'leftDrive.setPower(0.4);\nrightDrive.setPower(0.4);\nsleep(500);', 'if (distanceSensor.getDistance(DistanceUnit.INCH) < 8) {\n    claw.setPosition(0.8);\n}', 'telemetry.addData("Encoder", leftDrive.getCurrentPosition());\ntelemetry.update();', 'telemetry.addData("Auto", "Mission complete");\ntelemetry.update();'
  ];
  const roadRunner = [
    'Pose2d start = new Pose2d(0, 0, 0);', 'Pose2d currentPose = drive.getPoseEstimate();', 'Trajectory path = drive.trajectoryBuilder(start).forward(24).build();', 'drive.followTrajectory(path);', 'Trajectory spline = drive.trajectoryBuilder(start).splineTo(new Vector2d(24, 24), 0).build();', 'drive.followTrajectory(path);\nclaw.setPosition(0.8);', 'telemetry.addData("Road Runner", "Path complete");'
  ];
  const teleop = [
    'double forward = -gamepad1.left_stick_y;\ndouble turn = gamepad1.right_stick_x;', 'leftDrive.setPower(gamepad1.left_stick_y);\nrightDrive.setPower(gamepad1.right_stick_y);', 'double heading = imu.getRobotYawPitchRollAngles().getYaw(AngleUnit.RADIANS);\ntelemetry.addData("Heading", heading);', 'if (gamepad1.a) {\n    claw.setPosition(0.8);\n}', 'if (gamepad1.x) {\n    arm.setTargetPosition(500);\n}', 'telemetry.addData("TeleOp", "Driver control ready");\ntelemetry.update();'
  ];
  const next = ['// Read your team code one class at a time\ntelemetry.addData("Tip", "Ask why each line exists");', '// Pick a practice goal for this week\ntelemetry.addData("Next", "Build, test, improve");'];
  const snippets = [python, oop, funcs, logic, lists, ready, opmodes, mechanisms, sensors, autonomous, roadRunner, teleop, next];
  // Every lesson has a different edit, written to match the concept named in its title.
  const challengePlans = [
    [
      ['Booting robot program','Write the message Python shows when a robot program starts.','Text in quotation marks is a string: words your program can display.'],
      ['The editor runs one line at a time','Restore the editor message so you can see what one Python instruction does.','A print function runs one instruction, then moves to the next.'],
      ['0.6','Give the speed variable a decimal value.','A decimal number is useful for measurements such as motor power.'],
      ['robot_name','Name the piece of memory that stores the robot name.','A variable name labels a value so you can use it again later.'],
      ['Circuit Cats','Set the team name text.','Strings hold words, spaces, and letters inside quotation marks.'],
      ['drive_time','Name the number that represents how long a robot drives.','Good variable names tell your future self what a number means.'],
      ['battery_percent','Create the label for the battery reading before printing it.','Printing a variable lets you inspect the value stored in memory.'],
      ['This line is a comment','Write a note for a teammate without changing what Python runs.','A comment starts with # and is for humans, not the computer.'],
      ['driver_name','Create the variable that receives the driver\'s name.','Input and variables let a program remember a choice from a person.'],
      ['==','Use the comparison operator that asks whether both motor powers match.','Double equals compares two values; one equals stores a value.'],
      ['"Hello, " + robot_name','Build the greeting expression by joining text with the robot name.','The + operator can combine strings into a new message.'],
      ['12','Set the completed lesson count for the starter badge.','A number can represent a score, counter, distance, or progress total.']
    ],
    [
      ['robot','Name the object that holds information about this robot.','An object groups related information so it travels together in your program.'],
      ['Robot','Give the class its blueprint name.','A class is a reusable blueprint for making objects.'],
      ['name','Add the attribute name to the Robot blueprint.','An attribute is a piece of information each object can hold.'],
      ['__init__','Use the special constructor method name.','__init__ runs when a new object is made and gives it its starting setup.'],
      ['speak','Name the method that gives this Robot an action.','A method is a function that belongs to an object.'],
      ['self.name','Use self to refer to this robot\'s own name.','self means the particular object currently doing the work.'],
      ['Robot("Atlas")','Create an Atlas object from the Robot blueprint.','Calling a class makes a new object with its own data.'],
      ['atlas.power = 60','Change the Atlas power value after the object exists.','Object state is information that can change while a program runs.'],
      ['Motor("left")','Build a motor object for the left side of the drive train.','Separate objects can represent separate parts of one robot.'],
      ['DriveBot().drive()','Call the drive method on a new virtual drive bot.','Objects become useful when their methods make them do a job.']
    ],
    [
      ['announce','Name the reusable function that reports the robot is ready.','A function packages steps you might want to use more than once.'],
      ['set_power','Name the function that sets motor power.','Clear function names describe the job a block of code performs.'],
      ['power','Add the parameter that lets callers choose a power level.','Parameters are input values handed into a function.'],
      ['return inches * 2.54','Return the calculation that converts inches to centimeters.','return sends a result back to the line that called the function.'],
      ['speed','Use the outside variable name inside the function.','A global value is created outside a function and can be read inside it.'],
      ['power=0.5','Give the drive function a safe default power.','A default parameter is used when a caller does not provide a value.'],
      ['Move the robot at a safe power.','Write the documentation sentence that explains the function.','A docstring tells people what a function expects and does.'],
      ['math.sqrt(81)','Call the square-root helper from the math module.','Modules collect useful code so you do not have to reinvent every tool.']
    ],
    [
      ['<','Choose the comparison that checks whether the distance is below the safe limit.','Comparisons produce True or False answers for decisions.'],
      ['True','Set the started flag to the Boolean value meaning yes.','Boolean values are the two decision states: True and False.'],
      ['distance < 20','Write the safety condition that makes the robot stop.','An if statement runs its indented code only when its condition is true.'],
      ['battery > 30','Write the condition for the go branch.','else gives a program a backup action when the if condition is false.'],
      ['elif score > 5:','Add the middle decision branch for a score above five.','elif lets a program test another choice after an earlier condition fails.'],
      ['and','Combine the two requirements so both must be true.','and is true only when both conditions are true.'],
      ['["left", "right"]','Give the loop the two wheel names it must repeat over.','A for loop repeats once for every item in a sequence.'],
      ['count += 1','Increase the counter so the while loop can eventually stop.','A while loop needs a changing condition to avoid repeating forever.'],
      ['range(3)','Use range to repeat the loop three times.','range creates a sequence of counting numbers for a for loop.'],
      ['side == "left"','Check whether the current loop item is the left side.','Nested logic lets a program make a decision inside a repeating job.']
    ],
    [
      ['["left", "right"]','Create the list that stores both drive motor names.','Lists keep values in order inside square brackets.'],
      ['[0]','Use the first index to read the left motor.','List indexes start at zero, so item zero is the first item.'],
      ['[0:2]','Choose the slice that takes the first two sensors.','A slice selects a range of items without changing the original list.'],
      ['tasks.append("test motors")','Add a motor test to the end of the task list.','append adds one new item to the end of a list.'],
      ['for task in','Write the loop header that visits every task.','A loop variable holds one list item at a time.'],
      ['{"name": "Atlas", "power": 0.6}','Build the dictionary with labeled robot information.','Dictionaries connect labels called keys to useful values.'],
      ['robot["power"] = 0.7','Update the power value stored under its key.','A dictionary value can change while the key stays the same.'],
      ['{"battery": "charged", "wheels": "tight"}','Build the pit checklist with labels and status values.','Dictionaries are great for checklists because each value has a clear name.']
    ],
    [
      ['Status','Give the telemetry message a label a driver can understand.','FTC telemetry reports values from your OpMode to the Driver Station.'],
      ['0.5','Set a safe half-power motor command.','FTC motor power uses a number from -1 to 1.'],
      ['Online','Set the Robot Controller status message.','The Robot Controller runs the code and reports what your robot is doing.'],
      ['Success','Set the build result message after Android Studio compiles the code.','Android Studio turns your Java source code into an app the controller can run.'],
      ['left_drive','Use the exact configuration name for the left drive motor.','A hardware name must match the name configured on the Robot Controller.']
    ],
    [
      ['My First OpMode','Name the TeleOp program drivers will choose.','An OpMode is a selectable FTC program that controls a robot behavior.'],
      ['waitForStart();','Add the lifecycle command that waits for the match to begin.','Linear OpModes set up first, then wait for the driver station to start them.'],
      ['opModeIsActive()','Check that the OpMode is still running before sending telemetry.','A good OpMode checks whether it should keep working or stop safely.'],
      ['gamepad1.a','Read the A button from the first gamepad.','gamepad1 gives your code access to the buttons and sticks a driver moves.'],
      ['gamepad1.left_stick_y','Read the vertical position of the left joystick.','Joystick axes are numbers that change as a driver moves the stick.'],
      ['gamepad1.left_stick_y','Connect the driver left stick to the motor power command.','TeleOp code maps live driver input to a robot action.'],
      ['gamepad1.b','Use the B button as the driver-control safety stop.','Button conditions let drivers choose when a mechanism should act.']
    ],
    [
      ['"arm"','Use the configured name of the arm motor.','hardwareMap connects a Java variable to a real motor or servo on the robot.'],
      ['DcMotor.Direction.REVERSE','Reverse the left motor so both wheels drive forward together.','Motors mounted on opposite sides often need opposite directions.'],
      ['0.6','Set the arm to 60 percent power.','Power is a fraction of the motors full output, not a target position.'],
      ['DcMotor.ZeroPowerBehavior.BRAKE','Choose brake behavior when the arm motor receives zero power.','BRAKE resists motion; FLOAT lets a mechanism coast.'],
      ['"claw"','Use the configured name of the claw servo.','A servo is a position-controlled device, unlike a continuous DC motor.'],
      ['0.8','Set the claw to an open position.','Servo positions normally range from 0 to 1.'],
      ['claw.setPosition(0.8);','Add the claw action after powering the arm.','Coordinated mechanisms run more than one safe action in the right order.'],
      ['gamepad1.left_bumper','Use the left bumper as the arm safety input.','Safety controls should quickly remove power when a driver asks.']
    ],
    [
      ['Sensors help robots decide','Write the reason robots use sensor feedback.','Sensors turn information about the real world into values code can use.'],
      ['getCurrentPosition()','Read the encoder position from the drive motor.','Encoders count motor rotation so a robot can measure movement.'],
      ['STOP_AND_RESET_ENCODER','Choose the mode that zeroes an encoder before a measurement.','Resetting gives your program a known starting point.'],
      ['DistanceUnit.INCH','Ask the distance sensor to report its measurement in inches.','A sensor value only makes sense when its unit is clear.'],
      ['colorSensor.red()','Read the amount of red light detected by the color sensor.','Color sensors report separate values for different colors of light.'],
      ['AngleUnit.DEGREES','Request heading in degrees.','An IMU measures orientation so a robot can tell which way it is facing.'],
      ['imu.resetYaw()','Reset the IMU heading before a test.','Calibration and reset steps make sensor readings more reliable.'],
      ['< 6','Set the close-distance condition that stops the drive motors.','Sensor feedback becomes useful when it changes what a robot does next.']
    ],
    [
      ['Drive then turn','Write the short plan this autonomous routine will follow.','A good autonomous starts with a clear, small plan before adding code.'],
      ['sleep(1000);','Keep the motor on for one second before stopping it.','A timer creates a simple move, but sensors and encoders are more precise.'],
      ['setTargetPosition(500);','Set the encoder target for a controlled drive move.','RUN_TO_POSITION uses encoder counts to aim for a specific distance.'],
      ['heading < 90','Write the heading condition for the turn.','Feedback compares a sensor reading with the target you want to reach.'],
      ['state = 0','Create the first state for a multi-step autonomous routine.','A state machine remembers which part of a sequence the robot is on.'],
      ['sleep(500);','Add the half-second pause that makes this drive sequence safe.','Small, tested steps are easier to debug than one huge autonomous command.'],
      ['< 8','Set the sensor threshold that triggers the claw.','Sensor decisions let autonomous code react to the field instead of guessing.'],
      ['telemetry.update();','Send the encoder telemetry to the Driver Station display.','Telemetry update refreshes the values a team sees while debugging.'],
      ['Mission complete','Write the final autonomous status message.','Clear messages make it easier to confirm that a sequence reached its goal.']
    ],
    [
      ['new Pose2d(0, 0, 0);','Create the starting pose at x 0, y 0, heading 0.','A pose stores a robot\'s position and direction on the field.'],
      ['drive.getPoseEstimate();','Ask Road Runner for the robot\'s current estimated pose.','Pose estimates let path-following code know where the robot believes it is.'],
      ['.forward(24)','Add the forward 24-inch path segment.','A trajectory is a planned path the robot can follow smoothly.'],
      ['drive.followTrajectory(path);','Command the drive to follow the path you built.','Building a trajectory describes the path; following it makes the robot move.'],
      ['.splineTo(new Vector2d(24, 24), 0)','Create the curved path to the field point.','Splines create smooth curves instead of sharp direction changes.'],
      ['claw.setPosition(0.8);','Schedule the claw action after the path command.','Markers and timed actions coordinate mechanisms with robot movement.'],
      ['Path complete','Write the message that confirms the trajectory challenge ended.','Telemetry helps verify that a planned path reached its last step.']
    ],
    [
      ['-gamepad1.left_stick_y','Use the left stick as the forward/backward arcade drive value.','Arcade drive combines forward motion and turning into one easy control style.'],
      ['gamepad1.left_stick_y','Map the left stick to the left drive motor.','Tank drive controls the left and right sides separately.'],
      ['AngleUnit.RADIANS','Request the IMU heading in radians for field-centric math.','Field-centric drive uses the robots heading to translate driver direction into field direction.'],
      ['gamepad1.a','Use the A button as the claw toggle input.','A toggle changes a mechanism between saved states each time a button is pressed.'],
      ['setTargetPosition(500);','Set the arm preset position.','Presets give drivers repeatable mechanism positions during a match.'],
      ['Driver control ready','Write the status message for the start of TeleOp.','A match-ready TeleOp should clearly report that driver control is active.']
    ],
    [
      ['Ask why each line exists','Write the question to ask while reading a real team codebase.','Reading code is a skill: trace one class and one line at a time.'],
      ['Build, test, improve','Set the practice cycle for your own robotics coding plan.','Strong robot code grows through small builds, real tests, and thoughtful improvements.']
    ]
  ].flat();
  const lessons = []; let number = 1;
  sections.forEach(([section, language, titles], sectionIndex) => titles.forEach((title, index) => {
    const code = snippets[sectionIndex][index];
    lessons.push({ number, section, language, title, code, challenge: challengePlans[number - 1], goal: `Complete the ${title.toLowerCase()} edit and explain what the important lines do.`, description: `This lesson turns “${title}” into a hands-on coding mission. Make the concept-specific edit, then use the decoder to understand why it works.` });
    number += 1;
  }));
  window.CIRCUITPATH_SECTIONS = sections.map(([name, language, titles]) => ({ name, language, count: titles.length }));
  window.CIRCUITPATH_LESSONS = lessons;
})();
