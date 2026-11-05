// Edit this file to add or customize quiz questions.
const QUESTIONS = [
[1,"Beginner","PYTHON BASICS","Which keyword defines a function in Python?",null,["function","define","def","fun"],2,"Python uses `def` to declare a function. The indented block below it is the function body."],
[2,"Beginner","DATA TYPES","What is the data type of 3.14?","value = 3.14\nprint(type(value))",["int","float","str","bool"],1,"A number with a decimal point is a float."],
[3,"Beginner","OUTPUT PREDICTION","What will this code print?","print(2 ** 3)",["6","8","9","Error"],1,"The ** operator means exponentiation: 2 raised to the power 3 equals 8."],
[4,"Beginner","STRINGS","Which method converts a string to lowercase?",'name = "PYTHON"',["name.lower()","name.small()","name.down()","lower(name)"],0,"The string method lower() returns a lowercase copy."],
[5,"Beginner","LISTS","Which symbol creates a Python list?",null,["{}","()","[]","<>"],2,"Square brackets create a list, such as [1, 2, 3]."],
[6,"Intermediate","SLICING","What is the output?","word = 'PYTHON'\nprint(word[1:4])",["PYT","YTH","THO","YTHO"],1,"The start index is included and the stop index is excluded. Indexes 1, 2 and 3 spell YTH."],
[7,"Intermediate","LIST METHODS","What will this code print?","items = [1, 2, 3]\nitems.append(4)\nprint(items)",["[1, 2, 3]","[4, 1, 2, 3]","[1, 2, 3, 4]","Error"],2,"append() adds one item to the end of a list."],
[8,"Intermediate","LOOPS","How many times will Python be printed?","for i in range(2, 7, 2):\n    print('Python')",["2 times","3 times","4 times","5 times"],1,"range(2, 7, 2) generates 2, 4 and 6: three iterations."],
[9,"Intermediate","DICTIONARIES","Which expression safely gets a missing key?",'profile = {"name": "Ava"}',["profile['age']","profile.get('age')","profile.key('age')","profile.find('age')"],1,"dict.get() returns None by default when the key is absent instead of raising KeyError."],
[10,"Intermediate","BOOLEAN LOGIC","What is the result of True and not False?",null,["True","False","None","Error"],0,"not False is True, and True and True evaluates to True."],
[11,"Intermediate","FUNCTIONS","What does a function return if it has no return statement?","def greet():\n    print('Hello')\n\nresult = greet()\nprint(result)",['"Hello"',"0","None","True"],2,"A function without an explicit return statement returns None."],
[12,"Intermediate","COMPREHENSIONS","What list is created?","squares = [x*x for x in range(4)]",["[1, 4, 9, 16]","[0, 1, 4, 9]","[0, 1, 2, 3]","[0, 2, 4, 6]"],1,"range(4) produces 0, 1, 2, 3. Squaring each creates [0, 1, 4, 9]."],
[13,"Advanced","SCOPE","What will this code print?","x = 10\ndef change():\n    x = 5\nchange()\nprint(x)",["5","10","None","Error"],1,"The x assigned inside change() is local. The global x remains 10."],
[14,"Advanced","IDENTITY","Which operator checks whether two names refer to the same object?",null,["==","=","is","equals"],2,"is checks object identity. == checks whether values compare equal."],
[15,"Advanced","EXCEPTIONS","Which optional block runs whether an exception occurs or not?","try:\n    risky_operation()\nexcept ValueError:\n    recover()",["else","finally","raise","catch"],1,"A finally block executes after the try/except sequence."],
[16,"Advanced","REFERENCE BEHAVIOR","What is the output?","a = [1, 2]\nb = a\nb.append(3)\nprint(a)",["[1, 2]","[1, 2, 3]","[3]","Error"],1,"a and b refer to the same list object. Mutating it through b is visible through a."],
[17,"Advanced","ITERATORS","What does next(iter([7, 8, 9])) return?",null,["8","9","[7, 8, 9]","7"],3,"iter() creates an iterator; the first next() call returns the first element, 7."],
[18,"Expert","DECORATORS","What is the main purpose of a decorator in Python?",null,["Delete a function","Modify or extend a callable's behavior","Convert a list to a tuple","Stop recursion"],1,"A decorator wraps a function or class to add or modify behavior."],
[19,"Expert","GENERATORS","Which keyword makes a function produce generator values?",null,["return","yield","async","pass"],1,"yield pauses a function and produces a value. Calling it creates a generator."],
[20,"Expert","DEFAULT ARGUMENTS","What is the output of the two calls?","def add_item(item, box=[]):\n    box.append(item)\n    return box\n\nprint(add_item(1))\nprint(add_item(2))",["[1] then [2]","[1] then [1, 2]","[1, 2] then [1, 2]","TypeError"],1,"Default argument objects are created once when the function is defined. The same list is reused. Prefer box=None and create a list inside the function."]

  // ================= BEGINNER =================

  [21,"Beginner","VARIABLES","What will be the output?","x = 10\nx = 20\nprint(x)",["10","20","30","Error"],1,"The variable x is reassigned from 10 to 20. Therefore, the output is 20."],

  [22,"Beginner","OPERATORS","What does the // operator do in Python?","print(17 // 5)",["Normal division","Floor division","Multiplication","Power"],1,"The // operator performs floor division and returns the quotient rounded down."],

  [23,"Beginner","STRINGS","What will this code print?",'text = "Python"\nprint(len(text))',["5","6","7","Error"],1,"The len() function returns the number of characters. Python has six characters."],

  [24,"Beginner","TYPE CONVERSION","What is the result?",'print(int("25") + 5)',["255","30",'"255"',"Error"],1,"int() converts the string 25 into an integer. Adding 5 produces 30."],

  [25,"Beginner","BOOLEAN","Which of these values is falsy in Python?",null,["0","False","None","All of these"],3,"Zero, False and None are all falsy values in Python."],

  [26,"Beginner","TUPLES","Which expression creates a tuple?",null,["[1, 2, 3]","{1, 2, 3}","(1, 2, 3)","None"],2,"Parentheses with comma-separated values create a tuple."],

  [27,"Beginner","OUTPUT PREDICTION","What will be printed?",'print("Py" + "thon")',["Py thon","Python","Py+thon","Error"],1,"The + operator concatenates strings without adding a space."],

  [28,"Beginner","CONDITIONALS","Which keyword is used for an alternative condition?",null,["elseif","elif","otherwise","when"],1,"Python uses elif to check another condition after an if statement."],

  [29,"Beginner","LISTS","What is the output?","numbers = [10, 20, 30]\nprint(numbers[-1])",["10","20","30","Error"],2,"Negative indexing starts from the end. Index -1 accesses the last element."],

  [30,"Beginner","COMMENTS","Which symbol starts a single-line comment in Python?",null,["//","#","/*","--"],1,"Python uses the # symbol for single-line comments."],

  // ================= INTERMEDIATE =================

  [31,"Intermediate","SETS","What will be the output?","values = {1, 2, 2, 3, 3}\nprint(len(values))",["5","4","3","2"],2,"A set stores only unique elements. The resulting set contains 1, 2 and 3."],

  [32,"Intermediate","LOOPS","What will this code print?","for i in range(3):\n    print(i, end=' ')",["1 2 3","0 1 2","0 1 2 3","1 2"],1,"range(3) generates 0, 1 and 2. The stop value is excluded."],

  [33,"Intermediate","LIST METHODS","What does pop() return by default?","items = [5, 10, 15]\nprint(items.pop())",["5","10","15","None"],2,"pop() removes and returns the last item when no index is supplied."],

  [34,"Intermediate","DICTIONARIES","Which method returns all dictionary keys?",'data = {"a": 1, "b": 2}',["data.values()","data.keys()","data.items()","data.all()"],1,"The keys() method returns a view containing all dictionary keys."],

  [35,"Intermediate","FUNCTIONS","What is the output?","def multiply(a, b=2):\n    return a * b\n\nprint(multiply(5))",["5","7","10","Error"],2,"The default value of b is 2. Therefore, 5 multiplied by 2 equals 10."],

  [36,"Intermediate","STRING SLICING","What will this code print?",'text = "PROGRAMMING"\nprint(text[:3])',["PRO","ROG","PROGRAM","ING"],0,"The slice [:3] takes characters from index 0 up to, but not including, index 3."],

  [37,"Intermediate","ENUMERATE","What does enumerate() provide?",null,["Only values","Only indexes","Index and value pairs","Sorted values"],2,"enumerate() produces pairs containing an index and its corresponding value."],

  [38,"Intermediate","ZIP FUNCTION","What is the output?","a = [1, 2]\nb = ['A', 'B']\nprint(list(zip(a, b)))",["[1, 2, 'A', 'B']","[(1, 'A'), (2, 'B')]","[(1, 2), ('A', 'B')]","Error"],1,"zip() combines corresponding elements from iterables into tuples."],

  [39,"Intermediate","EXCEPTIONS","Which exception occurs when dividing by zero?","print(10 / 0)",["ValueError","TypeError","ZeroDivisionError","NameError"],2,"Python raises ZeroDivisionError when a number is divided by zero."],

  [40,"Intermediate","LAMBDA","What is the output?","square = lambda x: x * x\nprint(square(6))",["12","36","6","Error"],1,"The lambda function returns x multiplied by itself. 6 times 6 equals 36."],

  // ================= ADVANCED =================

  [41,"Advanced","RECURSION","What will this recursive function return?","def factorial(n):\n    if n == 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))",["10","16","24","120"],2,"Factorial of 4 is 4 × 3 × 2 × 1 = 24."],

  [42,"Advanced","MAP FUNCTION","What is the result?","nums = [1, 2, 3]\nresult = list(map(lambda x: x * 2, nums))\nprint(result)",["[1, 2, 3]","[2, 4, 6]","[1, 4, 9]","[3, 4, 5]"],1,"map() applies the lambda function to every element, doubling each value."],

  [43,"Advanced","FILTER FUNCTION","What does this code return?","nums = [1, 2, 3, 4, 5]\nresult = list(filter(lambda x: x % 2 == 0, nums))\nprint(result)",["[1, 3, 5]","[2, 4]","[1, 2, 3, 4, 5]","[4]"],1,"filter() keeps elements for which the condition is true. Here, those are even numbers."],

  [44,"Advanced","FILE HANDLING","Which mode opens a file for appending?",null,["r","w","a","x"],2,"The a mode appends content to the end of an existing file."],

  [45,"Advanced","OOP","What does self represent in an instance method?",null,["The class itself","The current instance","A global variable","A constructor"],1,"self refers to the current object instance."],

  [46,"Advanced","INHERITANCE","What is inheritance in Python?",null,["Copying a variable","A class deriving features from another class","Deleting a class","Importing a module"],1,"Inheritance allows a child class to reuse or extend attributes and methods from a parent class."],

  [47,"Advanced","COMPREHENSIONS","What will be printed?","result = {x: x*x for x in range(1, 4)}\nprint(result[3])",["3","6","9","12"],2,"The dictionary comprehension maps each number to its square. The value for key 3 is 9."],

  [48,"Advanced","ANY AND ALL","What does all([True, True, False]) return?",null,["True","False","None","Error"],1,"all() returns True only when every element in the iterable is truthy."],

  [49,"Advanced","SORTING","What is the output?","numbers = [4, 1, 3]\nprint(sorted(numbers))",["[4, 3, 1]","[1, 3, 4]","None","[3, 1, 4]"],1,"sorted() returns a new list with elements in ascending order."],

  [50,"Advanced","CONTEXT MANAGERS","Which keyword is commonly used with a context manager?",null,["with","using","open","manage"],0,"The with statement manages setup and cleanup, such as automatically closing a file."],

  // ================= EXPERT =================

  [51,"Expert","CLOSURES","What will this code print?","def outer():\n    x = 10\n    def inner():\n        return x\n    return inner\n\nf = outer()\nprint(f())",["None","10","Error","inner"],1,"The inner function remembers x from its enclosing scope. This is called a closure."],

  [52,"Expert","GENERATORS","What does next() return first?","def numbers():\n    yield 10\n    yield 20\n\ng = numbers()\nprint(next(g))",["20","10","None","Error"],1,"The first next() call resumes the generator until its first yield statement, producing 10."],

  [53,"Expert","NONLOCAL","What is the output?","def outer():\n    x = 5\n    def inner():\n        nonlocal x\n        x = 9\n    inner()\n    return x\n\nprint(outer())",["5","9","None","Error"],1,"nonlocal allows inner() to modify x from the nearest enclosing function scope."],

  [54,"Expert","DECORATORS","What does a typical function decorator receive and return?",null,["A string and integer","A callable and usually a callable","Only a class","Only a list"],1,"A typical decorator receives a callable and returns a wrapped callable."],

  [55,"Expert","SHALLOW COPY","What is a shallow copy?",null,["A recursive copy of every nested object","A new outer container that may share nested objects","A reference to the same outer object","A deleted object"],1,"A shallow copy creates a new outer container but keeps references to nested objects."],

  [56,"Expert","MUTABLE DEFAULTS","What is the recommended way to avoid a shared mutable default list?","def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items",["Use items = [] in the signature","Use items = None and create a list inside","Use global items","Use a tuple default"],1,"Using None as the default and creating a fresh list inside the function avoids sharing one mutable list across calls."],

  [57,"Expert","ASYNC PYTHON","Which syntax declares a coroutine function?",null,["await","async def","yield","future"],1,"A coroutine function is declared using async def. It can use await inside its body."],

  [58,"Expert","ITERATORS","What is the difference between an iterable and an iterator?",null,["They are always identical","An iterable can produce an iterator; an iterator provides values on demand","An iterator stores only strings","An iterable cannot be looped over"],1,"An iterable can provide an iterator through iter(). An iterator produces values using next() and maintains its iteration state."],

  [59,"Expert","EXCEPTION HANDLING","What happens if an exception is raised inside finally?",null,["It is always ignored","It can propagate and override an earlier pending exception","Python restarts the program","finally is skipped"],1,"An exception raised inside finally can propagate outward and may replace an exception that was already being handled."],

  [60,"Expert","PYTHON INTERNALS","What does GIL refer to in CPython?",null,["Global Import Library","Global Interpreter Lock","General Iteration Loop","Graphical Interface Layer"],1,"The Global Interpreter Lock is a CPython mechanism. Conventional builds allow only one thread at a time to execute Python bytecode. Free-threaded builds are also available."]

].map(([id,level,topic,question,code,options,answer,explanation])=>({id,level,topic,question,code,options,answer,explanation}));
