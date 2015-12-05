/*
 Matrix2D Class
 Defined in: Matrix2D:41
 Module: EaselJS
 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.

 This matrix can be visualized as:

 [ a  c  tx
 b  d  ty
 0  0  1  ]
 Note the locations of b and c.

 Constructor
 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
 Defined in Matrix2D:41
 Parameters:

 [a=1] Number optional
 Specifies the a property for the new matrix.

 [b=0] Number optional
 Specifies the b property for the new matrix.

 [c=0] Number optional
 Specifies the c property for the new matrix.

 [d=1] Number optional
 Specifies the d property for the new matrix.

 [tx=0] Number optional
 Specifies the tx property for the new matrix.

 [ty=0] Number optional
 Specifies the ty property for the new matrix.

 IndexMethodsProperties
 Item Index
 Methods

 append
 appendMatrix
 appendTransform
 clone
 copy
 decompose
 equals
 identity
 invert
 isIdentity
 prepend
 prependMatrix
 prependTransform
 rotate
 scale
 setValues
 skew
 toString
 transformPoint
 translate
 Properties

 a
 b
 c
 d
 DEG_TO_RAD static
 identity static
 tx
 ty
 */