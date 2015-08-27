// forked from kuma360's ???

package 

{

    import com.bit101.components.*;
1
    import flash.display.*;

    import flash.events.*;
 
    import flash.geom.*;

    import flash.net.navigateToURL;

   import flash.net.URLRequest;

    import flash.net.URLVariables;

    

    [SWF ( width = 465, height = 465, frameRate = 60 )];

    public class Main extends Sprite 

    {

        

        private var _CANVAS:BitmapData = new BitmapData ( stage.stageWidth , stage.stageHeight , false , 0 ) ;

        

        //???//////////////////////

        private var _S0:PushButton ; 

        /////////////////////////////

        

        private var _B0:PushButton ; 

        private var _B1:PushButton ; 

        private var _B2:PushButton ; 

        private var _B3:PushButton ; 

        private var _B4:PushButton ; 

        

        private var _CLICK:Boolean = false ;

        private var _COLOR:uint = 0x603483;

        private var _BX:int = 0 ;

        private var _BY:int = 0 ;

        

        

        

        

        public function Main():void {

            

            addChild ( new Bitmap ( _CANVAS ) ) ;

                        

            _B0 = new PushButton ( this,  10 , 25, "ERASE" ) ;

            _B1 = new PushButton ( this, 120 , 25, "WALL" ) ;

            _B2 = new PushButton ( this, 230 , 25, "SAND" ) ;

            _B3 = new PushButton ( this, 340 , 25, "STONE" ) ;

            _B4 = new PushButton ( this, 340 , 50, "WATER" ) ;

            _B1.enabled = false ;

            

            _B0.addEventListener ( MouseEvent.CLICK , function ():void { 

                    _COLOR = 0x000000 ; 

                    _B0.enabled = false ; 

                    _B1.enabled = true  ; 

                    _B2.enabled = true  ; 

                    _B3.enabled = true  ; 

                    _B4.enabled = true  ; 

            } ) ;

            _B1.addEventListener ( MouseEvent.CLICK , function ():void { 

                _COLOR = 0x603483 ; _B0.enabled = true  ; _B1.enabled = false ; _B2.enabled = true  ; _B3.enabled = true  ; _B4.enabled = true  ; } ) ;

            _B2.addEventListener ( MouseEvent.CLICK , function ():void { 

                _COLOR = 0x79F7E7 ; _B0.enabled = true  ; _B1.enabled = true  ; _B2.enabled = false ; _B3.enabled = true  ; _B4.enabled = true  ; } ) ;

            _B3.addEventListener ( MouseEvent.CLICK , function ():void { 

                _COLOR = 0xA2F080 ; _B0.enabled = true  ; _B1.enabled = true  ; _B2.enabled = true  ; _B3.enabled = false ; _B4.enabled = true  ; } ) ;

            _B3.addEventListener ( MouseEvent.CLICK , function ():void { 

                _COLOR = 0x80A2F0 ; 

                _B0.enabled = true  ; 

                _B1.enabled = true  ; 

                _B2.enabled = true  ; 

                _B3.enabled = true ; 

                _B4.enabled = false ; 

            } ) ;

           

            stage.addEventListener ( MouseEvent.MOUSE_DOWN , function ():void { _CLICK = true ; } ) ;

            stage.addEventListener ( MouseEvent.MOUSE_UP   , function ():void { _CLICK = false; } ) ;

            addEventListener ( Event.ENTER_FRAME , RUN ) ;

            

        }

        

        

        

        

        public function RUN ( e:Event ):void {

            

            _CANVAS.lock() ;

            

            ////////////////////////////////////

            /*

            for ( var I:int = 200 ; I < 250 ; ++ I ) {

                

                if ( Math.random() < .1 ) {

                    _CANVAS.setPixel ( I , 60 , 0x79F7E7 ) ;

                }

                

            }

            */

            

            ////////////////////////////////////

            if ( _CLICK && 60 < mouseY && 60 < _BY ) {

                

                for ( var J:int = 0 ; J < 20 ; ++ J ) {

                    var R:Number = J / 20 ;

                    Rect = new Rectangle ( _BX * R + mouseX * ( 1 - R ) , _BY * R + mouseY * ( 1 - R ) , 5 , 5 );

                    _CANVAS.fillRect ( Rect , _COLOR ) ;

                }

                

            }

            _BX = mouseX ;

            _BY = mouseY ;

            

            ////////////////////////////////////

            for ( var X:int = 0 ; X < _CANVAS.width ; ++ X ) {

                

                for ( var Y:int = _CANVAS.height - 1 ; Y >= 0 ; -- Y ) {

                    

                    var C:uint = _CANVAS.getPixel ( X , Y ) ;

                    if ( C == 0 ) {

                        continue ;

                    }

                    

                    if ( C == 0x79F7E7 ) {

                        

                        var T:uint ;

                        var TX:int ;

                        

                        {//??

                            T = _CANVAS.getPixel ( X , Y + 1 ) ;

                            if ( T == 0 ) {

                                _CANVAS.setPixel ( X , Y     , T ) ;

                                _CANVAS.setPixel ( X , Y + 1 , C ) ;

                                continue ;

                            }

                            

                            //?????????,???????????????

                            if ( T == 0xA2F080 && Math.random() < .5 ) {

                                _CANVAS.setPixel ( X , Y     , T ) ;

                                _CANVAS.setPixel ( X , Y + 1 , C ) ;

                                continue ;

                            }

                        }

                        

                        {//????

                            TX = X + Math.floor ( Math.random() * 7 ) - 3 ;

                            T = _CANVAS.getPixel ( TX , Y ) ;

                            if ( T == 0 ) {

                                _CANVAS.setPixel (  X , Y , T ) ;

                                _CANVAS.setPixel ( TX , Y , C ) ;

                                continue ;

                            }

                            

                            //?????????,???????????????

                            if ( T == 0xA2F080 && Math.random() < .8 ) {

                                _CANVAS.setPixel (  X , Y , T ) ;

                                _CANVAS.setPixel ( TX , Y , C ) ;

                                continue ;

                            }

                        }

                        

                    }

                    

                    if ( C == 0xA2F080 ) {

                        

                        {//??

                            T = _CANVAS.getPixel ( X , Y + 1 ) ;

                            if ( T == 0 ) {

                                _CANVAS.setPixel ( X , Y     , T ) ;

                                _CANVAS.setPixel ( X , Y + 1 , C ) ;

                                continue ;

                            }

                        }

                        

                        {//????

                            TX = X + Math.floor ( Math.random() * 7 ) - 3 ;

                            T = _CANVAS.getPixel ( TX , Y ) ;

                            if ( T == 0 ) {

                                _CANVAS.setPixel (  X , Y , T ) ;

                                _CANVAS.setPixel ( TX , Y , C ) ;

                                continue ;

                            }

                        }

                    }

                    

                }

                

            }

            

            

            _CANVAS.unlock() ;

            

        }

        

    }

    

}
