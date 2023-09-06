# temporary name
username = "Guest"

print("Hi,", username)

def storeUsername():
    username = input("Enter a username: ")
    
def checkAccess():
    if username == "Emily":
        print("Recognized user.")
    else:
        print("Unrecognized user.")

storeUsername()
checkAccess()
