// کلمه ای از کاربر دریافت کرده و چک کنید که کلمه وارد شده از هر دو سمت چپ و راست به یک صورت خوانده 
// می شود یا خیر

// به عنوان مثل کلمه 
// gig 
// از هر دو طرف به یک صورت خوانده می شود

var word= prompt('کلمه ای را وارد کنید:')
var wordArray=word.split('')
var wordArrayStr=wordArray.join(' ')
var wordArrayReverse=wordArray.reverse()
var wordArrayReverseStr=wordArrayReverse.join(' ')

if(wordArrayStr==wordArrayReverseStr){
    console.log('کلمه وارد شده از دو طرف یکسان خوانده می شود')
} else{
    console.log('کلمه وارد شده از دو طرف یکسان خوانده نمی شود')
}

