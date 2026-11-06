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
  

  // ================= BEGINNER =================

  [61,"Beginner","INPUT FUNCTION","What does input() return by default?",null,["Integer","Float","String","Boolean"],2,"The input() function returns user input as a string by default."],

  [62,"Beginner","OPERATORS","What is the output?","print(10 % 3)",["1","2","3","0"],0,"The modulo operator % returns the remainder. 10 divided by 3 leaves remainder 1."],

  [63,"Beginner","STRINGS","What will this code print?",'print("hello".upper())',["hello","HELLO","Hello","Error"],1,"The upper() method converts all alphabetic characters to uppercase."],

  [64,"Beginner","LISTS","What is the output?","a = [1, 2, 3]\na.insert(1, 9)\nprint(a)",["[1, 2, 3, 9]","[9, 1, 2, 3]","[1, 9, 2, 3]","[1, 2, 9, 3]"],2,"insert(1, 9) inserts 9 at index 1."],

  [65,"Beginner","CONDITIONALS","What will be printed?","x = 15\nif x > 10:\n    print('Big')\nelse:\n    print('Small')",["Big","Small","15","Error"],0,"Since 15 is greater than 10, the if block executes."],

  [66,"Beginner","TYPE CHECKING","Which function checks the type of an object?",null,["typeof()","type()","check()","datatype()"],1,"Python provides the built-in type() function to inspect an object's type."],

  [67,"Beginner","OUTPUT PREDICTION","What is the result?","print(5 == 5.0)",["True","False","5.0","Error"],0,"Python numeric equality considers 5 and 5.0 equal, even though their types differ."],

  [68,"Beginner","LISTS","What will be the output?","a = [4, 5, 6]\na.reverse()\nprint(a)",["[4, 5, 6]","[6, 5, 4]","[5, 4, 6]","None"],1,"reverse() reverses the list in place."],

  [69,"Beginner","STRINGS","What does the strip() method do?",null,["Removes all spaces everywhere","Removes leading and trailing whitespace","Converts to uppercase","Splits a string"],1,"strip() removes leading and trailing whitespace by default."],

  [70,"Beginner","OPERATORS","What is the output?","print(2 + 3 * 4)",["20","14","24","Error"],1,"Multiplication has higher precedence than addition. 2 + 12 equals 14."],

  // ================= INTERMEDIATE =================

  [71,"Intermediate","LIST COPYING","What will be printed?","a = [1, 2, 3]\nb = a.copy()\nb.append(4)\nprint(a)",["[1, 2, 3, 4]","[1, 2, 3]","[4]","Error"],1,"copy() creates a separate shallow list. Appending to b does not change the outer list a."],

  [72,"Intermediate","DICTIONARIES","What is the output?","data = {'x': 10}\ndata['y'] = 20\nprint(len(data))",["1","2","10","20"],1,"Adding a new key-value pair increases the dictionary length to 2."],

  [73,"Intermediate","LOOPS","What will this code print?","for i in range(5):\n    if i == 3:\n        break\n    print(i, end=' ')",["0 1 2","0 1 2 3","1 2 3","0 1 2 3 4"],0,"break terminates the loop when i becomes 3. Only 0, 1 and 2 are printed."],

  [74,"Intermediate","LOOPS","What does continue do in a loop?",null,["Stops the entire program","Skips the current iteration","Exits the function","Restarts Python"],1,"continue skips the remaining statements in the current iteration and proceeds to the next iteration."],

  [75,"Intermediate","FUNCTIONS","What is the output?","def greet(name):\n    return 'Hello ' + name\n\nprint(greet('Sam'))",["Hello","Sam","Hello Sam","Error"],2,"The function concatenates 'Hello ' with the supplied name."],

  [76,"Intermediate","SETS","Which operator calculates the intersection of two sets?",null,["|","&","-","^"],1,"The & operator returns elements common to both sets."],

  [77,"Intermediate","STRING METHODS","What will this print?",'text = "apple,banana,mango"\nprint(text.split(","))',["apple banana mango","['apple', 'banana', 'mango']","['apple,banana,mango']","Error"],1,"split(',') divides the string at each comma and returns a list."],

  [78,"Intermediate","SORTING","What is the output?","numbers = [3, 1, 2]\nnumbers.sort()\nprint(numbers)",["[3, 1, 2]","[1, 2, 3]","None","[2, 1, 3]"],1,"sort() sorts the original list in ascending order in place."],

  [79,"Intermediate","BOOLEAN LOGIC","What is the output?","print(not (True or False))",["True","False","None","Error"],1,"True or False evaluates to True. Applying not gives False."],

  [80,"Intermediate","DICTIONARIES","What does items() return?",null,["Only keys","Only values","Key-value pairs","Dictionary length"],2,"items() returns a view of the dictionary's key-value pairs."],

  // ================= ADVANCED =================

  [81,"Advanced","RECURSION","What is the output?","def count(n):\n    if n == 0:\n        return 0\n    return 1 + count(n - 1)\n\nprint(count(5))",["4","5","6","0"],1,"The recursive function decreases n until it reaches zero, adding 1 for each call. The result is 5."],

  [82,"Advanced","OOP","Which method is automatically called when a new instance is initialized?",null,["__start__()","__init__()","__create__()","__main__()"],1,"__init__() is the initializer method called after an instance is created."],

  [83,"Advanced","CLASS VARIABLES","What is the output?","class Demo:\n    value = 10\n\nobj = Demo()\nprint(obj.value)",["0","10","None","Error"],1,"value is a class attribute and can be accessed through an instance."],

  [84,"Advanced","EXCEPTION HANDLING","Which statement raises an exception manually?",null,["throw","raise","error","except"],1,"Python uses the raise statement to explicitly raise an exception."],

  [85,"Advanced","ITERATORS","What does iter() do?",null,["Returns the length of an object","Creates an iterator from an iterable","Sorts an iterable","Converts an object into a string"],1,"iter() obtains an iterator from an iterable object."],

  [86,"Advanced","LAMBDA","What is the output?","nums = [1, 2, 3, 4]\nresult = list(map(lambda x: x + 1, nums))\nprint(result)",["[1, 2, 3, 4]","[2, 3, 4, 5]","[1, 3, 5, 7]","[0, 1, 2, 3]"],1,"map() applies x + 1 to every element in the list."],

  [87,"Advanced","FILE HANDLING","Which method reads the entire remaining content of a file?",null,["read()","readline()","readchar()","get()"],0,"read() reads the remaining file content as a string by default."],

  [88,"Advanced","OOP INHERITANCE","Which function can call a method from a parent class?",null,["parent()","base()","super()","inherit()"],2,"super() provides access to methods from a parent class according to the method resolution order."],

  [89,"Advanced","LIST COMPREHENSION","What will be the output?","result = [x for x in range(6) if x % 2 == 0]\nprint(result)",["[1, 3, 5]","[0, 2, 4]","[2, 4, 6]","[0, 1, 2, 3, 4, 5]"],1,"The condition keeps only even numbers from range(6)."],

  [90,"Advanced","VARIABLE SCOPE","What does the global keyword allow inside a function?",null,["Create a new class","Modify a global variable","Create a local variable","Delete a module"],1,"The global keyword lets a function bind an assignment to a name in the module-level global scope."],

  // ================= EXPERT =================

  [91,"Expert","DECORATORS","Which standard decorator creates a method that receives the class instead of the instance?",null,["@staticmethod","@classmethod","@property","@abstractmethod"],1,"@classmethod passes the class as its first argument, conventionally named cls."],

  [92,"Expert","PROPERTY","What is the purpose of @property?",null,["Create a generator","Expose a method through attribute-style access","Delete a class attribute","Make a function asynchronous"],1,"@property allows a method to be accessed like an attribute and can support controlled attribute access."],

  [93,"Expert","GENERATOR EXPRESSIONS","Which expression creates a generator expression?",null,["[x*x for x in range(5)]","(x*x for x in range(5))","{x*x for x in range(5)}","<x*x for x in range(5)>"],1,"Parentheses around a comprehension create a generator expression, which produces values lazily."],

  [94,"Expert","CONTEXT MANAGERS","Which special methods are commonly used to implement a context manager?",null,["__start__ and __stop__","__enter__ and __exit__","__open__ and __close__","__init__ and __del__"],1,"A basic synchronous context manager implements __enter__() and __exit__()."],

  [95,"Expert","MRO","What does MRO stand for in Python?",null,["Method Runtime Object","Method Resolution Order","Module Reference Operation","Multiple Return Output"],1,"Method Resolution Order determines the order in which Python searches base classes for attributes and methods."],

  [96,"Expert","ASYNC PYTHON","Which keyword pauses a coroutine until an awaitable completes?",null,["yield","wait","await","pause"],2,"await suspends the coroutine until the awaited object produces a result."],

  [97,"Expert","COPY MODULE","Which module provides deepcopy()?",null,["os","copy","sys","json"],1,"The copy module provides copy() and deepcopy() for shallow and deep copying."],

  [98,"Expert","EXCEPTION HIERARCHY","Which is the base class of most built-in, non-exit exceptions?",null,["BaseException","Exception","object","Error"],1,"Exception is the common base class for most ordinary built-in exceptions. SystemExit, KeyboardInterrupt and GeneratorExit derive directly from BaseException."],

  [99,"Expert","PYTHON MEMORY","What does Python's garbage collector primarily help manage?",null,["Syntax errors","Unreachable objects and reference cycles","CPU temperature","Network connections"],1,"Python's cyclic garbage collector helps reclaim unreachable reference cycles. Reference counting also manages many object lifetimes."],

  [100,"Expert","OUTPUT PREDICTION","What will this code print?","a = [1, 2]\nb = a[:]\nb[0] = 99\nprint(a)",["[99, 2]","[1, 2]","[99]","Error"],1,"List slicing creates a shallow copy. Changing the first element of b does not change the outer list a."]



].map(([id,level,topic,question,code,options,answer,explanation])=>({id,level,topic,question,code,options,answer,explanation}));
