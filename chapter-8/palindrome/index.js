module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {  	
  	return this.content.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
  	return this.content.toUpperCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    const letterRegex = /[a-z]/gi;
    return (this.content.match(letterRegex) || []).join("");
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();