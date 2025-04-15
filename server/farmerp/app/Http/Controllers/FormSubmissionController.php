<?php

namespace App\Http\Controllers;

use App\Models\FormSubmission;
use Illuminate\Http\Request;

class FormSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return FormSubmission::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
        ]);

        $submission = FormSubmission::create($validated);

        return response()->json($submission, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(FormSubmission $formSubmission)
    {
        return $formSubmission;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FormSubmission $formSubmission)
    {
        $validated = $request->validate([
            'fname' => 'sometimes|string|max:255',
            'lname' => 'sometimes|string|max:255',
            'age' => 'sometimes|integer|min:0',
        ]);

        $formSubmission->update($validated);

        return response()->json($formSubmission);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormSubmission $formSubmission)
    {
        $formSubmission->delete();

        return response()->json(null, 204);
    }
}
