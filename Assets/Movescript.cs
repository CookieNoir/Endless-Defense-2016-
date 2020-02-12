using UnityEngine;
using CnControls;

[RequireComponent(typeof(CharacterController))]
public class Movescript : MonoBehaviour
{	Animator anim;
    public float Speed;
    private Transform _mainCameraTransform;
    private Transform _transform;
    private CharacterController _characterController;
	void Start () {
		anim=GetComponent<Animator>();}
    private void OnEnable()
    {
        _mainCameraTransform = Camera.main.GetComponent<Transform>();
        _characterController = GetComponent<CharacterController>();
        _transform = GetComponent<Transform>();
    }

    public void Update()
    {
        var inputVector = new Vector3(CnInputManager.GetAxis("Horizontal"), CnInputManager.GetAxis("Vertical"));
        Vector3 movementVector = Vector3.zero;

		if (inputVector.sqrMagnitude > 0.001f) {
			anim.SetBool ("Running", true);
			movementVector = _mainCameraTransform.TransformDirection (inputVector);
			movementVector.y = 0f;
			movementVector.Normalize ();
			_transform.forward = movementVector;
		} else
			anim.SetBool ("Running", false);
        movementVector += Physics.gravity;
		_characterController.Move(movementVector * Time.deltaTime*Speed);
    }
}
