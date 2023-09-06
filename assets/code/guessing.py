# Guessing Numbers

secret = 13

guess = int(input("Guess a number: "))

# how do I check if a number is divisible by 7? modulo!
if guess % 7 == 0 or secret:
    print("You win!")
else:
    print("You lose!")


